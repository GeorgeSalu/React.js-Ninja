'use strict'

import React from 'react'

const FilterLink = ({ action, activeFilter, label, onClick }) => {
 if (action === activeFilter) {
    return <span
              style={{ marginRight: 10 }}
            >
              {label}
            </span>
  }

  return <a
            href=''
            style={{ marginRight: 10 }}
            onClick={onClick}
          >
            {item.label}
          </a>
}

export default FilterLink
