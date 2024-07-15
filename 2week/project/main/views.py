from django.shortcuts import render

# Create your views here.

def mainpage(request):
    context = {
        'generation' : 12,
        'members' : ['현아', '영심이', '티준'],
        'info': {'weather': '종음', 'feeling': '배고픔(?)', 'note': '아기사자 화이팅!'}
    }

    return render(request, 'main/mainpage.html', context)

def secondpage(request):
    return render(request, 'main/secondpage.html')