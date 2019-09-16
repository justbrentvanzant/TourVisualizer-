import bs4
import urllib.request
from bs4 import BeautifulSoup as soup
from urllib.request import Request, urlopen
baseQueryString = "https://www.setlist.fm/search?query="
req = Request('https://www.billboard.com/charts/artist-100', headers={'User-Agent': 'Mozilla/5.0'})
webpage = urlopen(req).read()

soupPage = soup(webpage, "html.parser")
containers = soupPage.findAll("div",{"class":"chart-list-item"});

exportFilename = "top100ArtistsWeekly.csv"
f = open(exportFilename, "w")
headers = "Name\n"
f.write(headers)
count = 0;
for x in range(0, 100):
	title = containers[x]['data-title']
	f.write(title+",")
	title.replace(" ", "+");
	req = Request(baseQueryString+title, headers={'User-Agent': 'Mozilla/5.0'})
	webpage = urlopen(req).read()
	soupPage = soup(webpage, "html.parser")
	outlineLists = soupPage.findAll("ol",{"class":"list-inline"});
	listContents = outlineLists.findAll("li")
	for content in listContents:
		f.write(content+"-")
	f.write('\n');