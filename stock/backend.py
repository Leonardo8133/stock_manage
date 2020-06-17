import random

class Factory:

	@staticmethod
	def value_calculate(products):
		'''Get Total Item values in Stock "Item.quantity * Item.Price" *Need Product.objects.all() as input'''
		init = 0

		for item in products:
			init += item.quantity * item.price

		return init

	@staticmethod
	def total_items(products):
		''' Get Total items in stock "Sum of All Products.quantity" *Need Product.objects.all() as input'''
		init=0

		for item in products:
			init+= item.quantity

		return init 

	@staticmethod
	def get_pkey_unique(item):
		all_products = item.objects.all()
		status = True
		for _ in range(50):
			rand  = random.randint(0, 9999)
			for item in all_products:
				if rand==item.pkey:
					status=False
			if status:
				return rand
		return None
		
	@staticmethod
	def get_product_context(products):
		all_products = products.objects.all()
		context = {'products': all_products,
				'total_products': len(all_products),
				'total_value': Factory.value_calculate(all_products),
				'total_items': Factory.total_items(all_products)}

		return context

	






