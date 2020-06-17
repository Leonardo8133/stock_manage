from django.shortcuts import render, redirect

# Create your views here.
from .models import Product, ProductForm, HistConf
from .backend import Factory


def index(request):
	all_products = Product.objects.all()
	context = Factory.get_product_context(Product)
	
	# context = {'products': all_products,
	# 			'total_products': len(all_products),
	# 			'total_value': Factory.value_calculate(all_products),
	# 			'total_items': Factory.total_items(all_products)}
	return render(request, 'stock/stock_home.html', context)

def manage(request):
	form = ProductForm()
	sucess= None
	if request.method == 'POST':
		form  = ProductForm(request.POST)
		print(request.POST)
		if form.is_valid():
			form.save()
			sucess= f"{form.cleaned_data['name']} created in database with Pkey: {form.cleaned_data['pkey']}"
			form = ProductForm()
		else:
			form.errors

	rand_pkey = Factory.get_pkey_unique(Product)
	form.fields['pkey'].widget.attrs.update({'placeholder':rand_pkey})
	form.fields['pkey'].initial=rand_pkey
	context = {'form': form,	
			 	'sucess': sucess,
			 	'all_products': Product.objects.all(),
			 	}
	return render(request, 'stock/stock_manage.html', context)

def deleted(request, pkey):
	form = ProductForm()
	sucess= None
	rand_pkey = Factory.get_pkey_unique(Product)
	form.fields['pkey'].widget.attrs.update({'placeholder':rand_pkey})
	form.fields['pkey'].initial=rand_pkey
	context = {'form': form,
			 	'all_products': Product.objects.all(),
			 	}
	context['pkey']= pkey
	Product.objects.filter(pkey=pkey)[0].delete()

	return render(request, 'stock/stock_manage.html', context)

def detail(request, pk):
	item = Product.objects.filter(pk=pk)[0]
	sucess= None
	remove= None
	
	if request.method=="POST":
		qnt = int(item.quantity)
		get = int(request.POST.get('quantity'))
		if qnt+get<0:
			print('error')
		else:
			HistConf.create(qnt, get, item, request.user).save()
			item.quantity = qnt+get			
			item.save()

			if get>0:
				sucess = f"{get} items Added to product - {item.name} -"
			else:
				remove = f"{-get} items Removed to product - {item.name} -"


	context ={
			"pk": pk,
			"item": item,
			"value": item.quantity * item.price,
			'sucess': sucess,
			'remove': remove,
			'history': HistConf.objects.filter(item=pk)[::-1],
		
			}
	return render(request, 'stock/stock_detail.html', context)


def history(request):
	context ={'history':HistConf.objects.all()[::-1]}
	return render(request, 'stock/stock_history.html', context)
