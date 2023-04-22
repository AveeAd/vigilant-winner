import React, { ReactElement, FC } from 'react';
import Head from 'next/head';
import Sidebar from '@/layouts/Sidebar';
import { FaPlus } from 'react-icons/fa';
import { MdSell, MdOutlineSell, MdAccountBox } from 'react-icons/md';

interface LayoutProps {
	children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Simple Accounting</title>
			</Head>
			<main className="grid grid-cols-12 h-screen overflow-auto relative">
				<Sidebar />
				<section className="col-span-10 h-screen overflow-y-auto bg-neutral-50">{children}</section>
				<label
					className="absolute bottom-10 right-10 rounded-full w-16 aspect-square bg-emerald-600 text-white grid place-content-center shadow-lg shadow-neutral-500 hover:bg-emerald-500 z-10 plus-btn"
					role="button"
					id="plus-btn"
					htmlFor="plus-checkbox"
				>
					<FaPlus />
				</label>
				<input type="checkbox" hidden id="plus-checkbox" />
				<div id="show-menu" className="absolute z-10 bottom-28 flex flex-col space-y-2 right-12">
					<button
						title="sales"
						className="bg-emerald-600 w-10 aspect-square rounded-full grid place-content-center text-white shadow-lg shadow-neutral-500"
					>
						<MdSell />
					</button>
					<button
						title="purchase"
						className="bg-emerald-600 w-10 aspect-square rounded-full grid place-content-center text-white shadow-lg shadow-neutral-500"
					>
						<MdOutlineSell />
					</button>
					<button
						title="account"
						className="bg-emerald-600 w-10 aspect-square rounded-full grid place-content-center text-white shadow-lg shadow-neutral-500"
					>
						<MdAccountBox />
					</button>
				</div>
			</main>
		</>
	);
};

export default Layout;
