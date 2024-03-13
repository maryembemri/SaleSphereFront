import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from '../../../helpers'
import {Item1} from '../../content/activity/Item1'
import {Item2} from '../../content/activity/Item2'
import {Item3} from '../../content/activity/Item3'
import {Item4} from '../../content/activity/Item4'
import {Item5} from '../../content/activity/Item5'
import {Item6} from '../../content/activity/Item6'
import {Item7} from '../../content/activity/Item7'
import {Item8} from '../../content/activity/Item8'

const ActivityDrawer: FC = () => (
  <div
    id='activities'
    className='bg-body'
    data-drawer='true'
    data-drawer-name='activities'
    data-drawer-activate='true'
    data-drawer-overlay='true'
    data-drawer-width="{default:'300px', 'lg': '900px'}"
    data-drawer-direction='end'
    data-drawer-toggle='#activities_toggle'
    data-drawer-close='#activities_close'
  >
    <div className='card shadow-none rounded-0'>
      <div className='card-header' id='activities_header'>
        <h3 className='card-title fw-bolder text-dark'>Activity Logs</h3>

        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-active-light-primary me-n5'
            id='activities_close'
          >
            <Icon iconName='cross' className='fs-1' />
          </button>
        </div>
      </div>
      <div className='card-body position-relative' id='activities_body'>
        <div
          id='activities_scroll'
          className='position-relative scroll-y me-n5 pe-5'
          data-scroll='true'
          data-scroll-height='auto'
          data-scroll-wrappers='#activities_body'
          data-scroll-dependencies='#activities_header, #activities_footer'
          data-scroll-offset='5px'
        >
          <div className='timeline'>
            <Item1 />
            <Item2 />
            <Item3 />
            <Item4 />
            <Item5 />
            <Item6 />
            <Item7 />
            <Item8 />
          </div>
        </div>
      </div>
      <div className='card-footer py-5 text-center' id='activities_footer'>
        <Link to='/crafted/pages/profile' className='btn btn-bg-body text-primary'>
          View All Activities
          <Icon iconName='arrow-right' className='fs-3 text-primary' />
        </Link>
      </div>
    </div>
  </div>
)

export {ActivityDrawer}
