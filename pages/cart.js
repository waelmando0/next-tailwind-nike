import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import { Store } from '../utils/store';
import Link from 'next/link';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

function CartScreen() {
	const router = useRouter();

	const { state, dispatch } = useContext(Store);
	const {
		cart: { cartItems },
	} = state;

	const removeItemHandler = (item) => {
		dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
	};

	const updateCartHandler = async (item, qty) => {
		const quantity = Number(qty);
		const { data } = await axios.get(`/api/products/${item._id}`);
		if (data.countInStock < quantity) {
			return toast.error('Sorry. Product is out of stock');
		}
		dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
		toast.success('Product updated in the cart');
	};

	return (
		<section>
			<Head>
				<title>Shopping Cart</title>
			</Head>
			<div className='py-16 lg:mx-16'>
				<h1 className='mb-4 text-xl'>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<div>
						Cart is empty.
						<Link href='/'>
							<a className='text-blue-600 hover:underline'> Go Shopping</a>
						</Link>
					</div>
				) : (
					<div className='grid md:grid-cols-4 md:gap-4'>
						<div className='overflow-x-auto md:col-span-3'>
							<table className='min-w-full'>
								<thead className='border-b'>
									<tr>
										<th className='px-5 text-left'>Item</th>
										<th className='px-5 text-center'>Quantity</th>
										<th className='px-5 text-center'>Price</th>
										<th className='px-5'>Action</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map((item) => (
										<tr key={item.slug} className='border-b'>
											<td>
												<Link href={`/product/${item.slug}`}>
													<a className='flex items-center'>
														<Image
															src={item.image}
															alt={item.name}
															width={50}
															height={50}
														/>
														&nbsp;
														{item.name}
													</a>
												</Link>
											</td>
											<td className='p-5 text-center'>
												<select
													value={item.quantity}
													onChange={(e) =>
														updateCartHandler(item, e.target.value)
													}
												>
													{[...Array(item.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</select>
											</td>
											<td className='p-5 text-center'>{item.price}</td>
											<td className='p-5 text-center'>
												<button onClick={() => removeItemHandler(item)}>
													<XCircleIcon className='w-5 h-5'></XCircleIcon>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div>
							<ul className='p-5 bg-black/75 text-white'>
								<li>
									<div className='pb-3 text-xl'>
										Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :
										${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
									</div>
								</li>
								<li>
									<button
										onClick={() => router.push('login?redirect=/shipping')}
										className='block font-medium bg-white hover:bg-gray-100 text-black w-full py-2 rounded'
									>
										Ceck Out
									</button>
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
