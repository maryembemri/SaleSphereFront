import clsx from 'clsx'
import {Icon, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'
import { useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {HeaderSettingMenu} from '../../../partials/layout/header-menus/HeaderSettingMenu'
import {HeaderEasyAccessMenu} from '../../../partials/layout/header-menus/HeaderEasyAccessMenu'

const itemClass = 'ms-1 ms-md-4'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
const userAvatarClass = 'symbol-35px'
const btnIconClass = 'fs-2'

const Navbar = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  const toggleFullScreen = () => {
    const element = document.documentElement as any

    if (!isFullScreen) {
      // Enter fullscreen mode
      // Cast to any for compatibility

      if (element.requestFullscreen) {
        element.requestFullscreen()
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  const location = useLocation()
  const {config} = useLayout()
  return (
    <div className='app-navbar flex-shrink-0'>
      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          data-menu-trigger="{default: 'click'}"
          data-menu-attach='parent'
          data-menu-placement='bottom-end'
          className={btnClass}
        >
          <Icon iconName='element-plus' className={btnIconClass} />
        </div>
        <HeaderEasyAccessMenu />
      </div>

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <div
          data-menu-trigger="{default: 'click'}"
          data-menu-attach='parent'
          data-menu-placement='bottom-end'
          className={btnClass}
        >
          <Icon iconName='element-plus' className={btnIconClass} />
        </div>
        <HeaderNotificationsMenu />
      </div> */}

      <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div onClick={toggleFullScreen} className={clsx(btnClass, isFullScreen && 'active')}>
          <Icon iconName='screen' className={btnIconClass} />
        </div>
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          data-menu-trigger="{default: 'click'}"
          data-menu-attach='parent'
          data-menu-placement='bottom-end'
          className={clsx(btnClass, location.pathname.includes('/settings/') && 'active')}
        >
          <Icon iconName='gear' className={btnIconClass} />
        </div>
        <HeaderSettingMenu />
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-menu-trigger="{default: 'click'}"
          data-menu-attach='parent'
          data-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
        </div>
        <HeaderUserMenu />
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='app_header_menu_toggle'
          >
            <Icon iconName='text-align-left' className={btnIconClass} />
          </div>
        </div>
      )}
    </div>
  )
}

export {Navbar}
