from textblob import TextBlob
from django.shortcuts import render
from django.http import HttpResponse
import nltk
nltk.download('punkt')


def index(request):
    return render(request, 'index.html')


def post(request):
    x = request.POST['Name']
    y = request.POST['Post']
    blob = TextBlob(y)
    sentiment = blob.sentiment.polarity
    if(sentiment < 0):
        return HttpResponse("<h3>This Tweet Contains Negative sentiment</h3>")
    else:
        return HttpResponse("<h3>This Tweet Contains Possitive sentiment</h3>")


def delete(request):
    return render(request, 'index.html')
