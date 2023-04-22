import Table from '@/components/Table';
import Layout from '@/layouts/Layout';
import { salesTableData, salesTableHeader } from '@/temp/data';
import React from 'react';

const Sales = () => {
	return (
		<Layout>
			<div className="m-4 p-4 shadow-md shadow-neutral-400 bg-white rounded-md">
				<div>
					<h3 className="text-emerald-600 text-3xl font-bold drop-shadow-sm pb-4 mb-8 border-b-2 border-emerald-600">
						Sales
					</h3>
					<div className="grid grid-cols-4 mb-8 gap-4 text-white">
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Total Sales</h4>
							<h6 className="text-2xl text-end font-bold drop-shadow-sm">20000</h6>
						</div>
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Weekly Growth</h4>
							<h6 className="text-2xl text-end font-bold drop-shadow-sm">+5%</h6>
						</div>
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Monthly Growth</h4>
							<h6 className="text-2xl text-end font-bold drop-shadow-sm">+1.25%</h6>
						</div>
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Profit</h4>
							<h6 className="text-2xl text-end font-bold drop-shadow-sm">2000</h6>
						</div>
					</div>
					<Table headers={salesTableHeader} data={salesTableData} />
				</div>
			</div>
		</Layout>
	);
};

export default Sales;
