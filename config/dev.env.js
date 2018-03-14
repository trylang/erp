'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    LOCAL_ROOT: '"http://localhost:8000"',
    API_ROOT: '"https://easy-mock.com/mock/5a90dfa02ec4bd0f366d8fcc/erp"'
})
