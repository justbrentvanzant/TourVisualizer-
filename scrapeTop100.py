import bs4
import urllib.request
from bs4 import BeautifulSoup as soup
from urllib.request import Request, urlopen
baseQueryString = "https://www.setlist.fm/search?query="
req = Request('https://www.billboard.com/charts/artist-100', headers={'User-Agent': 'Mozilla/5.0'})
webpage = urlopen(req).read()

soupPage = soup(webpage, "html.parser")
containers = soupPage.findAll("div",{"class":"chart-list-item"});

exportFilename = "top100ArtistsWeekly.txt"
f = open(exportFilename, "w")
count = 0;
for x in range(0, 100):
	title = containers[x]['data-title']
	f.write("artistArray"+"["+str(x)+"] = "+"'"+title+"'"+";");
	title.replace(" ", "+");
	f.write('\n');