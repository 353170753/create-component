import * as _ from 'lodash'
import config from '../config'
import { FrameworkType, Language } from '../utils/tools'
import { OpenSourceLicenseType } from './../utils/tools'

export const fullOptions = {
  title: config.title,
  description: config.description,
  author: config.author,
  useCommitlint: true,
  usePrecommit: true,
  cssinjs: false,
  useCommitizen: true,
  useCHANGELOG: true,
  frameworkType: FrameworkType.React,
  projectLanguage: Language.JavaScript,
  license: OpenSourceLicenseType.MIT,
  proVersion: '1.0.0',
  manger: 'npm',
  isContinue: true,
}
