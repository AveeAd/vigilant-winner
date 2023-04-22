import Layout from '@/layouts/Layout';
import { dashboardLineChartData } from '@/temp/data';
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
	return (
		<Layout>
			<div className="px-8 pb-8">
				<hr className="my-8 border-sky-200" />

				<div className="grid grid-cols-5 gap-4 text-end">
					<div className="bg-white shadow-md p-4 rounded border-b-4 border-green-600 hover:scale-[1.05] transition-all duration-150">
						<h1 className="text-4xl font-bold mb-3 text-green-600">Rs. 1000000</h1>
						<h2 className="text-2xl font-semibold text-slate-600">Sales</h2>
					</div>
					<div className="bg-white shadow-md p-4 rounded border-b-4 border-rose-600 hover:scale-[1.05] transition-all duration-150">
						<h1 className="text-4xl font-bold mb-3 text-rose-600">Rs. 800000</h1>
						<h2 className="text-2xl font-semibold text-slate-600">Purchase</h2>
					</div>
					<div className="bg-white shadow-md p-4 rounded border-b-4 border-rose-600 hover:scale-[1.05] transition-all duration-150">
						<h1 className="text-4xl font-bold mb-3 text-rose-600">Rs. 150000</h1>
						<h2 className="text-2xl font-semibold text-slate-600">Credits</h2>
					</div>
					<div className="bg-white shadow-md p-4 rounded border-b-4 border-green-600 hover:scale-[1.05] transition-all duration-150">
						<h1 className="text-4xl font-bold mb-3 text-green-600">Rs. 200000</h1>
						<h2 className="text-2xl font-semibold text-slate-600">Profit</h2>
					</div>
					<div className="bg-white shadow-md p-4 rounded border-b-4 border-cyan-600 hover:scale-[1.05] transition-all duration-150">
						<h1 className="text-4xl font-bold mb-3 text-cyan-600">140</h1>
						<h2 className="text-2xl font-semibold text-slate-600">Total Accounts</h2>
					</div>
				</div>
				<div className="my-4 h-1" />
				<div className="grid grid-cols-12 gap-4">
					<div className="shadow-md bg-white col-span-8 p-4">
						<ResponsiveContainer minHeight={300}>
							<LineChart width={500} height={300} data={dashboardLineChartData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type="monotone" dataKey="sales" stroke="#059669" />
								<Line type="monotone" dataKey="purchase" stroke="#e11d48" />
							</LineChart>
						</ResponsiveContainer>
					</div>
					<div></div>
				</div>
				<div className="my-4 h-1" />
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-8 bg-white shadow-md border-t-4 border-green-600">
						<h4 className="text-xl font-semibold p-4 shadow">Last Transactions</h4>
						<div>
							<p className="p-4">Lorem ipsum dolor sit amet.</p>
							<p className="p-4">Lorem ipsum dolor sit amet.</p>
							<p className="p-4">Lorem ipsum dolor sit amet.</p>
							<p className="p-4">Lorem ipsum dolor sit amet.</p>
							<p className="p-4">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
					<div className="col-span-4 bg-white shadow-md border-t-4 border-green-600">
						<h4 className="text-xl font-semibold p-4 shadow">Popular Sales</h4>
						<div>
							<p className="p-4">Lorem, ipsum.</p>
							<p className="p-4">Lorem, ipsum.</p>
							<p className="p-4">Lorem, ipsum.</p>
							<p className="p-4">Lorem, ipsum.</p>
							<p className="p-4">Lorem, ipsum.</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
