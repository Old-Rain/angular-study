const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/tdData', (req, res) => {
  fs.readFile(
    path.join(__dirname, '/c-todolist/c-todolist.json'),
    'utf-8',
    (err, data) => {
      const response = {}

      if (err) {
        response.code = '0001'
        response.message = '失败'
        res.send(500, JSON.parse(JSON.stringify(response)))
        return
      }

      response.code = '0000'
      response.message = '成功'
      response.data = JSON.parse(data)
      res.send(200, JSON.parse(JSON.stringify(response)))
    }
  )
})

app.post('/tdData', (req, res) => {
  const p = new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '/c-todolist/c-todolist.json'),
      'utf-8',
      (err, data) => {
        if (err) {
          reject(error)
          return
        }

        try {
          resolve(JSON.parse(data))
        } catch (error) {
          reject(error)
        }
      }
    )
  })

  const response = {}
  p.then((data) => {
    const { name } = req.body

    let has = data.find((item) => item.name === name)
    if (!!has) {
      response.code = '0001'
      response.message = '存在重复项'
      res.send(400, JSON.parse(JSON.stringify(response)))
      return
    }

    fs.writeFile(
      path.join(__dirname, '/c-todolist/c-todolist.json'),
      JSON.stringify([{ name, status: false }, ...data]),
      () => {
        response.code = '0000'
        response.message = '成功'
        res.send(200, JSON.parse(JSON.stringify(response)))
      }
    )
  }).catch((err) => {
    response.code = '0002'
    response.message = '服务器错误'
    res.send(500, JSON.parse(JSON.stringify(response)))
  })
})

app.put('/tdData', (req, res) => {
  const p = new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '/c-todolist/c-todolist.json'),
      'utf-8',
      (err, data) => {
        if (err) {
          reject(error)
          return
        }

        try {
          resolve(JSON.parse(data))
        } catch (error) {
          reject(error)
        }
      }
    )
  })

  const response = {}
  p.then((data) => {
    const { i } = req.body
    data[i].status = !data[i].status

    fs.writeFile(
      path.join(__dirname, '/c-todolist/c-todolist.json'),
      JSON.stringify(data),
      () => {
        response.code = '0000'
        response.message = '成功'
        res.send(200, JSON.parse(JSON.stringify(response)))
      }
    )
  }).catch((err) => {
    response.code = '0002'
    response.message = '服务器错误'
    res.send(500, JSON.parse(JSON.stringify(response)))
  })
})

app.delete('/tdData/:i', (req, res) => {
  const p = new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '/c-todolist/c-todolist.json'),
      'utf-8',
      (err, data) => {
        if (err) {
          reject(error)
          return
        }

        try {
          resolve(JSON.parse(data))
        } catch (error) {
          reject(error)
        }
      }
    )
  })

  const response = {}
  p.then((data) => {
    const { i } = req.params
    data.splice(i, 1)

    fs.writeFile(
      path.join(__dirname, '/c-todolist/c-todolist.json'),
      JSON.stringify(data),
      () => {
        response.code = '0000'
        response.message = '成功'
        res.send(200, JSON.parse(JSON.stringify(response)))
      }
    )
  }).catch((err) => {
    response.code = '0002'
    response.message = '服务器错误'
    res.send(500, JSON.parse(JSON.stringify(response)))
  })
})

app.listen(2200, () => console.log('服务启动在2200启动'))
