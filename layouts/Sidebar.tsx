import React from 'react';
import Link from 'next/link';
import { MdDashboard, MdSell, MdOutlineSell, MdAccountBox } from 'react-icons/md';

const Sidebar = () => {
	return (
		<aside className="col-span-2 py-4 px-1 shadow-md bg-emerald-100 shadow-neutral-400">
			<div className="px-4">
				<h2 className="w-max text-2xl font-bold text-transparent bg-gradient-to-br from-emerald-600 to-sky-600 bg-clip-text">
					Simple Accounting
				</h2>
			</div>
			<hr className="border-emerald-600 my-4 mx-1" />
			<div className="font-semibold text-lg">
				<div>
					<Link
						href="/dashboard"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						<MdDashboard />
						<span>Dashboard</span>
					</Link>
					<Link
						href="/sales"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						<MdSell />
						<span>Sales</span>
					</Link>
					<Link
						href="/purchase"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						<MdOutlineSell />
						<span>Purchase</span>
					</Link>
					<Link
						href="/accounts"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						<MdAccountBox />
						<span>Accounts</span>
					</Link>
				</div>
				<hr className="my-4 border-emerald-600" />
				<div>
					<Link
						href="/reports"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Reports
					</Link>
					<Link
						href="/analytics"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Analytics
					</Link>
				</div>
				<hr className="my-4 border-emerald-600" />
				<div>
					<Link
						href="/profile"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Profile
					</Link>
					<Link
						href="/plans"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Plans
					</Link>
					<Link
						href="/settings"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Settings
					</Link>
				</div>
				<hr className="my-4 border-emerald-600" />
				<div>
					<Link
						href="language"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Language
					</Link>

					<Link
						href="/privacy"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Privacy and Policy
					</Link>
					<Link
						href="/privacy"
						className="py-2 hover:bg-emerald-600 hover:text-white rounded-md px-4 transition-all duration-150 flex items-center space-x-2"
						role="button"
					>
						Log Out
					</Link>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
