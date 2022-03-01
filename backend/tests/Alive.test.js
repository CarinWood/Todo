import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from '../src/server'

chai.should()
Chai.use(ChaiHTTP)