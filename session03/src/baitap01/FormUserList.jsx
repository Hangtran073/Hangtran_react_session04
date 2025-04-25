import React from 'react'

export default function FormUserList() {
  return (
    <>
     <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
              <button className="btn btn-primary btn-icon-text">
                Tìm kiếm
              </button>
            </form>
    </>
  )
}
