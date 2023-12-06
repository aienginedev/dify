'use client'
import type { FC } from 'react'
import React, { useRef, useState } from 'react'
import { useHover } from 'ahooks'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { MessageCheckRemove, MessageFastPlus } from '@/app/components/base/icons/src/vender/line/communication'
import { MessageFast } from '@/app/components/base/icons/src/vender/solid/communication'
import { Edit04 } from '@/app/components/base/icons/src/vender/line/general'
import DeleteConfirmModal from '@/app/components/base/modal/delete-confirm-modal'

type Props = {
  cached: boolean
  onAdd: () => void
  onEdit: () => void
  onRemove: () => void
}

const CacheCtrlBtn: FC<Props> = ({
  cached,
  onAdd,
  onEdit,
  onRemove,
}) => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const cachedBtnRef = useRef<HTMLDivElement>(null)
  const isCachedBtnHovering = useHover(cachedBtnRef)
  return (
    <div className='inline-block'>
      <div className='inline-flex p-0.5 space-x-0.5 rounded-lg bg-white border border-gray-100 shadow-md text-gray-500 cursor-pointer'>
        {cached
          ? (
            <div>
              <div
                ref={cachedBtnRef}
                className={cn(isCachedBtnHovering ? 'bg-[#FEF3F2] text-[#D92D20]' : 'bg-[#EEF4FF] text-[#444CE7]', 'flex p-1 space-x-1 items-center rounded-md leading-4 text-xs font-medium')}
                onClick={() => setShowModal(true)}
              >
                {!isCachedBtnHovering
                  ? (
                    <>
                      <MessageFast className='w-4 h-4' />
                      <div>{t('appDebug.feature.cacheReply.cached')}</div>
                    </>
                  )
                  : <>
                    <MessageCheckRemove className='w-4 h-4' />
                    <div>{t('appDebug.feature.cacheReply.remove')}</div>
                  </>}
              </div>
            </div>
          )
          : (
            <div
              className='p-1 rounded-md hover:bg-[#EEF4FF] hover:text-[#444CE7] cursor-pointer'
              onClick={onAdd}
            >
              <MessageFastPlus className='w-4 h-4' />
            </div>
          )}
        <div
          className='p-1 cursor-pointer rounded-md hover:bg-black/5'
          onClick={onEdit}
        >
          <Edit04 className='w-4 h-4' />
        </div>
      </div>
      <DeleteConfirmModal
        isShow={showModal}
        onHide={() => setShowModal(false)}
        onRemove={onRemove}
        text={t('appDebug.feature.cacheReply.removeConfirm') as string}
      />
    </div>
  )
}
export default React.memo(CacheCtrlBtn)
