import Table from '@/components/Table';
import Layout from '@/layouts/Layout';
import { salesTableData, salesTableHeader } from '@/temp/data';
import React from 'react';

const Purchase = () => {
	return (
		<Layout>
			<div className="m-4 p-4 shadow-md shadow-neutral-400 bg-white rounded-md">
				<div>
					<h3 className="text-emerald-600 text-3xl font-bold drop-shadow-sm pb-4 mb-8 border-b-2 border-emerald-600">
						Purchase
					</h3>
					<div className="grid grid-cols-4 mb-8 gap-4 text-white">
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Total Purchase</h4>
							<h6 className="text-2xl text-end font-bold drop-shadow-sm">20000</h6>
						</div>
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Payable</h4>
							<h6 className="text-2xl text-end font-bold drop-shadow-sm">5000</h6>
						</div>
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Upcoming Payment</h4>
							<div className="flex justify-between items-center">
								<h6 className="text-lg text-end font-bold drop-shadow-sm">ABC Co.</h6>
								<h6 className="text-2xl text-end font-bold drop-shadow-sm">5000</h6>
							</div>
						</div>
						<div className="bg-emerald-400 p-2 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-150">
							<h4 className="text-xl font-bold drop-shadow-sm">Next Purchase Suggestion</h4>
							<div className="flex justify-between items-center">
								<h6 className="text-lg text-end font-bold drop-shadow-sm">Wai Wai</h6>
								<h6 className="text-2xl text-end font-bold drop-shadow-sm">
									4<small className="text-base">(in stock)</small>
								</h6>
							</div>
						</div>
					</div>
					<Table headers={salesTableHeader} data={salesTableData} />
				</div>
			</div>
		</Layout>
	);
};

export default Purchase;
