import React from 'react'

const SideBar: React.FC = () => {
    return (
        <aside id="default-sidebar" className="mobile:fixed desktop:hidden bg-blue-400 top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            sidebar
        </aside>
    )
}

export default SideBar
