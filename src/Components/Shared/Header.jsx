import { React, Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-white px-4 h-16 flex justify-between items-center border-b border-gray-200">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 " />
                <input
                    type="text"
                    placeholder="Search..."
                    className="pl-11 pr-4 h-10 w-[24rem] text-sm focus:outline-none active:outline-none border border-gray-300 rounded-sm"
                />
            </div>
            <div className="flex gap-2 items-center mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open ? 'bg-gray-100' : '',
                                    'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-80">
                                    <div className="bg-white px-2 py-2.5 shadow-md ring-1 ring-black ring-opacity-5 rounded-sm">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is the message panel</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open ? 'bg-gray-100' : '',
                                    'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-80">
                                    <div className="bg-white px-2 py-2.5 shadow-md ring-1 ring-black ring-opacity-5 rounded-sm">
                                        <strong className="text-gray-700 font-medium">Notifications</strong>
                                        <div className="mt-2 py-1 text-sm">This is the notifications panel</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <div
                                className="w-10 h-10 rounded-full bg-sky-500 bg-no-repeat bg-cover bg-center"
                                style={{
                                    backgroundImage: 'url("https://source.unsplash.com/80×80?face")'
                                }}
                            >
                                <span className="sr-only">Will Smith</span>
                            </div>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ringblack ring-opacity-5 focus:outline-none active:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'text-gray-700 focus:bg-gray-200 block rounded-sm px-4 py-2 cursor-pointer'
                                            )}
                                            onClick={() => navigate('/profile')}
                                        >
                                            Profile
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'text-gray-700 focus:bg-gray-200 block rounded-sm px-4 py-2 cursor-pointer'
                                            )}
                                            onClick={() => navigate('/settings')}
                                        >
                                            Settings
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'text-gray-700 focus:bg-gray-200 block rounded-sm px-4 py-2 cursor-pointer'
                                            )}
                                            onClick={() => navigate('/logout')}
                                        >
                                            Logout
                                        </div>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </div>
                </Menu>
            </div>
        </div>
    )
}
