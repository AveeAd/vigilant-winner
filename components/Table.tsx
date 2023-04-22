import React, { FC } from 'react';
import { salesTableDataType, salesTableHeaderType } from '@/temp/data';
type TableType = {
	headers: any[];
	data: any[];
	noSerialNumber?: boolean;
};

const Table: FC<TableType> = ({ headers = [], data = [], noSerialNumber = false }) => {
	return (
		<div>
			<table className="w-full mb-8">
				<thead>
					{!noSerialNumber && <th className="text-start bg-slate-600 text-white px-2">S.N.</th>}
					{headers?.map((head: salesTableHeaderType) => (
						<th key={head.id} className={['text-start py-3 bg-slate-600 text-white px-2'].join(' ')}>
							{head?.title}
						</th>
					))}
				</thead>
				<tbody>
					{data?.map((d: salesTableDataType, i: number) => (
						<tr
							key={d.id}
							className={[i % 2 === 0 && 'bg-slate-100', 'hover:bg-slate-200 transition-all duration-150'].join(' ')}
						>
							{!noSerialNumber && <td className="p-2">{i + 1}</td>}
							{headers?.map((head: salesTableHeaderType) =>
								head?.cell ? (
									<td key={head.id} className={['p-2', head.className].join(' ')}>
										{head.cell(d)}
									</td>
								) : (
									<td key={head.id} className={['p-2', head.className].join(' ')}>
										{d[head.title]}
									</td>
								)
							)}
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex justify-center items-center space-x-2">
				<p className="flex justify-center items-center font-bold bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 rounded-md leading-none w-10 aspect-square cursor-pointer hover:scale-[1.10] transition-all duration-150">
					{'<'}
				</p>
				<div className="w-2 aspect-square"></div>

				<p className="flex justify-center items-center font-bold bg-emerald-600 text-white border-2 border-emerald-600 rounded-md leading-none w-10 aspect-square  cursor-pointer  hover:scale-[1.10] transition-all duration-150">
					1
				</p>
				<p className="flex justify-center items-center text-slate-600 font-bold hover:bg-emerald-600 hover:text-white  border-2 border-emerald-600  rounded-md leading-none w-10 aspect-square cursor-pointer hover:scale-[1.10] transition-all duration-150">
					2
				</p>
				<p className="flex justify-center items-center text-slate-600 font-bold hover:bg-emerald-600 hover:text-white  border-2 border-emerald-600 rounded-md leading-none w-10 aspect-square cursor-pointer hover:scale-[1.10] transition-all duration-150 ">
					3
				</p>
				<div className="w-2 aspect-square"></div>

				<p className="flex justify-center items-center font-bold bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 rounded-md leading-none w-10 aspect-square cursor-pointer hover:scale-[1.10] transition-all duration-150">
					{'>'}
				</p>
			</div>
		</div>
	);
};

export default Table;
