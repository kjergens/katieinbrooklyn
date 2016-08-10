import sys
import re
import os.path

total = len(sys.argv)
cmdargs = str(sys.argv)

imgdir = sys.argv[1]
filename = sys.argv[1] + '.html'

print 'Preparing ' + filename

if os.path.isfile(filename):
	# if file exists, open it and do some substitutions
  s=open(filename).read()
  # TODO - find data.js entry and update it
else: 
	# if the file doesn't exit create it and add contents of blank.html
	s=open("blank.html").read()
	# TODO - create data.js entry

# also replace the fb image, fb title, and fb desription in meta data
# ideally read from data.js so only update one file
# a separate update meta data file to run after file created so you don't throw out the whole thing
# if no info on the image, make it same name as filename with .png extension
# or create the data.js entry from an input file
# use system date as date
s=re.sub("index", "%s" % imgdir, s)
f=open(filename, 'w')
f.write(s)
f.flush()
f.close()