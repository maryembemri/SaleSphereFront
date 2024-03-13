/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Icon} from '../../../helpers'
import {ChatInner} from '../../chat/ChatInner'

const DrawerMessenger: FC = () => (
  <div
    id='drawer_chat'
    className='bg-body'
    data-drawer='true'
    data-drawer-name='chat'
    data-drawer-activate='true'
    data-drawer-overlay='true'
    data-drawer-width="{default:'300px', 'md': '500px'}"
    data-drawer-direction='end'
    data-drawer-toggle='#drawer_chat_toggle'
    data-drawer-close='#drawer_chat_close'
  >
    <div className='card w-100 rounded-0' id='drawer_chat_messenger'>
      <div className='card-header pe-5' id='drawer_chat_messenger_header'>
        <div className='card-title'>
          <div className='d-flex justify-content-center flex-column me-3'>
            <a href='#' className='fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1'>
              Brian Cox
            </a>

            <div className='mb-0 lh-1'>
              <span className='badge badge-success badge-circle w-10px h-10px me-1'></span>
              <span className='fs-7 fw-bold text-gray-400'>Active</span>
            </div>
          </div>
        </div>

        <div className='card-toolbar'>
          <div className='me-2'>
            <button
              className='btn btn-sm btn-icon btn-active-light-primary'
              data-menu-trigger='click'
              data-menu-placement='bottom-end'
              data-menu-flip='top-end'
            >
              <i className='bi bi-three-dots fs-3'></i>
            </button>
          </div>

          <div className='btn btn-sm btn-icon btn-active-light-primary' id='drawer_chat_close'>
            <Icon iconName='cross' className='fs-2' />
          </div>
        </div>
      </div>

      <ChatInner isDrawer={true} />
    </div>
  </div>
)

export {DrawerMessenger}
