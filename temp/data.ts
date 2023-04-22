export type salesTableHeaderType = {
	id: number;
	title: string;
	className?: string;
	cell?: (value: any, index?: number) => any;
};

export const salesTableHeader: salesTableHeaderType[] = [
	{
		id: 1,
		title: 'Account',
		className: '',
		cell: (data: any) => data.account_name,
	},
	{
		id: 6,
		title: 'Product',
		className: '',
		cell: (data: any) => data.product_name,
	},
	{
		id: 2,
		title: 'Description',
		className: '',
		cell: (data: any) => (data?.description ? data?.description : 'No Description'),
	},
	{
		id: 3,
		title: 'Quantity',
		className: '',
		cell: (data: any) => data.quantity + ' ' + (data?.unit ? data?.unit : ''),
	},
	{
		id: 4,
		title: 'Rate (Rs.)',
		className: '',
		cell: (data: any) => data.rate + ' /-',
	},
	{
		id: 5,
		title: 'Amount (Rs.)',
		className: '	',
		cell: (data: any) => data.quantity * data.rate + ' /-',
	},
];

export type salesTableDataType = {
	id: number;
	account: number;
	account_name: string;
	product: number;
	product_name: string;
	rate: number;
	quantity: number;
	[key: string]: any;
};

export const salesTableData: salesTableDataType[] = [
	{
		id: 1,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 10,
		unit: 'packets',
		description: 'Chicken',
	},
	{
		id: 2,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
		description: 'Veg',
	},
	{
		id: 3,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
		description: 'Chicken',
	},
	{
		id: 4,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
	},
	{
		id: 5,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
	},
	{
		id: 6,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
		description: 'Chicken',
	},
	{
		id: 7,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
	},
	{
		id: 8,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
	},
	{
		id: 9,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
	},
	{
		id: 10,
		account: 1,
		account_name: 'Narayan Kaji Shrestha',
		product: 1,
		product_name: 'Wai Wai',
		rate: 25,
		quantity: 30,
		unit: 'packets',
	},
];

export const dashboardLineChartData = [
	{
		name: 'Shrawan',
		sales: 2000,
		purchase: 1200,
	},
	{
		name: 'Bhadra',
		sales: 2500,
		purchase: 2000,
	},
	{
		name: 'Ashoj',
		sales: 2200,
		purchase: 1800,
	},
	{
		name: 'Kartik',
		sales: 2780,
		purchase: 2000,
	},
	{
		name: 'Mangsir',
		sales: 2250,
		purchase: 2150,
	},
	{
		name: 'Poush',
		sales: 3000,
		purchase: 1600,
	},
	{
		name: 'Magh',
		sales: 2500,
		purchase: 1700,
	},
	{
		name: 'Falgun',
		sales: 2600,
		purchase: 1800,
	},
	{
		name: 'Chaitra',
		sales: 2890,
		purchase: 2000,
	},
	{
		name: 'Baisakh',
		sales: 0,
		purchase: 0,
	},
	{
		name: 'Jestha',
		sales: 0,
		purchase: 0,
	},
	{
		name: 'Ashad',
		sales: 0,
		purchase: 0,
	},
];
