'use client'
import type { FC } from 'react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ScoreSlider from '../score-slider'
import { Item } from './config-param'
import Modal from '@/app/components/base/modal'
import Button from '@/app/components/base/button'
import { ModelType } from '@/app/components/header/account-setting/model-page/declarations'
import ModelSelector from '@/app/components/header/account-setting/model-page/model-selector/portal-select'
import { useProviderContext } from '@/context/provider-context'
import Toast from '@/app/components/base/toast'
import type { AnnotationReplyConfig } from '@/models/debug'
import { ANNOTATION_DEFAULT } from '@/config'

type Props = {
  appId: string
  isShow: boolean
  onHide: () => void
  onSave: (embeddingModel: {
    embedding_provider_name: string
    embedding_model_name: string
  }, score: number) => void
  isInit?: boolean
  annotationConfig: AnnotationReplyConfig
}

const ConfigParamModal: FC<Props> = ({
  isShow,
  onHide: doHide,
  onSave,
  isInit,
  annotationConfig: oldAnnotationConfig,
}) => {
  const { t } = useTranslation()
  const {
    embeddingsDefaultModel,
    isEmbeddingsDefaultModelValid,
  } = useProviderContext()
  const [annotationConfig, setAnnotationConfig] = useState(oldAnnotationConfig)

  const [isLoading, setLoading] = useState(false)
  const [embeddingModel, setEmbeddingModel] = useState(oldAnnotationConfig.embedding_model
    ? {
      providerName: oldAnnotationConfig.embedding_model.embedding_provider_name,
      modelName: oldAnnotationConfig.embedding_model.embedding_model_name,
    }
    : (embeddingsDefaultModel
      ? {
        providerName: embeddingsDefaultModel.provider.provider,
        modelName: embeddingsDefaultModel.model,
      }
      : undefined))
  const onHide = () => {
    if (!isLoading)
      doHide()
  }

  const handleSave = async () => {
    if (!embeddingModel || !embeddingModel.modelName || (embeddingModel.modelName === embeddingsDefaultModel?.model && !isEmbeddingsDefaultModelValid)) {
      Toast.notify({
        message: t('common.modelProvider.embeddingModel.required'),
        type: 'error',
      })
      return
    }
    setLoading(true)
    await onSave({
      embedding_provider_name: embeddingModel.providerName,
      embedding_model_name: embeddingModel.modelName,
    }, annotationConfig.score_threshold)
    setLoading(false)
  }

  return (
    <Modal
      isShow={isShow}
      onClose={onHide}
      className='!p-8 !pb-6 !mt-14 !max-w-none !w-[640px]'
      wrapperClassName='!z-50'
    >
      <div className='mb-2 text-xl font-semibold text-[#1D2939]'>
        {t(`appAnnotation.initSetup.${isInit ? 'title' : 'configTitle'}`)}
      </div>

      <div className='mt-6 space-y-3'>
        <Item
          title={t('appDebug.feature.annotation.scoreThreshold.title')}
          tooltip={t('appDebug.feature.annotation.scoreThreshold.description')}
        >
          <ScoreSlider
            className='mt-1'
            value={(annotationConfig.score_threshold || ANNOTATION_DEFAULT.score_threshold) * 100}
            onChange={(val) => {
              setAnnotationConfig({
                ...annotationConfig,
                score_threshold: val / 100,
              })
            }}
          />
        </Item>

        <Item
          title={t('common.modelProvider.embeddingModel.key')}
          tooltip={t('appAnnotation.embeddingModelSwitchTip')}
        >
          <div className='pt-1'>
            <ModelSelector
              widthSameToTrigger
              value={embeddingModel as any}
              modelType={ModelType.embeddings}
              onChange={(val) => {
                setEmbeddingModel({
                  providerName: val.model_provider.provider_name,
                  modelName: val.model_name,
                })
              }}
            />
          </div>
        </Item>
      </div>

      <div className='mt-6 flex gap-2 justify-end'>
        <Button className='!text-sm' onClick={onHide}>{t('common.operation.cancel')}</Button>
        <Button
          type='primary'
          onClick={handleSave}
          className='flex items-center border-[0.5px] !text-sm'
          loading={isLoading}
        >
          <div></div>
          <div>{t(`appAnnotation.initSetup.${isInit ? 'confirmBtn' : 'configConfirmBtn'}`)}</div>
        </Button >
      </div >
    </Modal >
  )
}
export default React.memo(ConfigParamModal)
