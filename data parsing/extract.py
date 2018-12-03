# Jennifer Long
# extract.py
# Desc: For extracting specific data categories from input data file
# 10/22/2018

import json
import pprint #pretty-print
from collections import OrderedDict

target_categories = ["a0AllInCountry", "STxa0AsylumRecep",
                    "STxa0InDetention", "STxa0RefRecognized",
                    "STxa0SubsidRecognized", "STxa0HumanRecognized",
                    "STxa0NotRecognized", "STxa0IllegalPool",
                    "a0IllegalInCountry", "a0AllJobsTotal"]

category_data = {
    "a0AllInCountry":OrderedDict(), "STxa0AsylumRecep":OrderedDict(),
    "STxa0InDetention":OrderedDict(), "STxa0RefRecognized":OrderedDict(),
    "STxa0SubsidRecognized":OrderedDict(), "STxa0HumanRecognized":OrderedDict(),
    "STxa0NotRecognized":OrderedDict(), "STxa0IllegalPool":OrderedDict(),
    "a0IllegalInCountry":OrderedDict(), "a0AllJobsTotal":OrderedDict()
}

time = ["0.0", "1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0",
        "9.0", "10.0", "11.0", "12.0", "13.0", "14.0", "15.0", "16.0", "17.0"]


# 1. Import Data
# json_file = os.path.join(STATIC_DIR, 'json/game/variable_dictionary_round_wise.json')
with open('sampleOutput.json') as f:
    data = json.load(f)

# 2. Organize Data
# Format:
# {
#     "data category": {"0.0": 400, "1.0":400}
# }
for t in time:
    for category in data[t]:
        if category in target_categories:
            category_data[category].update({t:data[t][category]})

# 3. Output Data - Separate Files
for category in target_categories:
    with open("extracted_data/"+category+".json", "w") as fout:
        json.dump(category_data[category], fout)

# 4. Output Data - One File
with open("extracted_data/allParsedOutput.json", "w") as fout:
    json.dump(category_data, fout)
