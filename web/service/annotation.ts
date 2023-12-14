import { del, get, post } from './base'
import type { AnnotationEnableStatus, AnnotationItemBasic, EmbeddingModelConfig } from '@/app/components/app/annotation/type'

export const fetchAnnotationConfig = (appId: string) => {
  return get(`apps/${appId}/annotation-setting`)
}
export const updateAnnotationStatus = (appId: string, action: AnnotationEnableStatus, embeddingModel?: EmbeddingModelConfig, score?: number) => {
  let body: any = {
    score_threshold: score,
  }
  if (embeddingModel) {
    body = {
      ...body,
      ...embeddingModel,
    }
  }

  return post(`apps/${appId}/annotation-reply/${action}`, {
    body,
  })
}

export const updateAnnotationScore = (appId: string, settingId: string, score: number) => {
  return post(`apps/${appId}/annotation-setting/${settingId}`, {
    body: { score_threshold: score },
  })
}

export const queryAnnotationJobStatus = (appId: string, action: AnnotationEnableStatus, jobId: string) => {
  return get(`apps/${appId}/annotation-reply/${action}/status/${jobId}`)
}

export const fetchAnnotationList = (appId: string, params: Record<string, any>) => {
  return get(`apps/${appId}/annotations`, { params })
}

export const fetchExportAnnotationList = (appId: string) => {
  return get(`apps/${appId}/annotations/export`)
}

export const addAnnotation = (appId: string, body: AnnotationItemBasic) => {
  return post(`apps/${appId}/annotations`, { body })
}

export const editAnnotation = (appId: string, annotationId: string, body: AnnotationItemBasic) => {
  return post(`apps/${appId}/annotations/${annotationId}`, { body })
}

export const delAnnotation = (appId: string, annotationId: string) => {
  return del(`apps/${appId}/annotations/${annotationId}`)
}

export const fetchHitHistoryList = (appId: string, annotationId: string, params: Record<string, any>) => {
  return get(`apps/${appId}/annotations/${annotationId}/hit-histories`, { params })
}
