# Name: Morena Bastiaansen
# Studentnumber: 10725792
#
# convertCSV2JSON.py
# Converts .csv file to .json file

import csv
import json

words = ["gezindte", "percentage", "provincie", "jaar"]

def convert(filename):
	filename_csv = filename
	lastfourletters = filename_csv[-4:]
	filename_json = filename_csv.split('.')[0] + '.json'
	file_csv = open(filename_csv, 'r')
	file_json = open(filename_json, 'w')
	reader = csv.reader(file_csv, words)

	data = []
	for line in file_csv:
		var_1 = line.split(';')[0]
		var_2 = line.split(';')[1]
		var_3 = line.split(';')[2]
		var_4 = line.split(';')[3].split('\n')[0]
		data.append({words[0]: var_1, words[1]: var_2, words[2]: var_3, words[3]: var_4})


	json.dump(data, file_json, sort_keys=True, indent=4, separators=(',', ': '))

	
convert("kerkelijke_gezindten.csv")







