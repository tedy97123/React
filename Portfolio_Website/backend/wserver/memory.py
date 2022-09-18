import tracemalloc
tracemalloc.start()

#memory derived from binary digit usage. Each additional zero adds two bytes
print("%d, %d" % tracemalloc.get_traced_memory()) #491
diff = int(491)#Operation for each additional int type: fixed if same number of digits
print('\na') #print() by itself: 388 bytes, 
#int: each digit after nothing adds two bytes
#string: each character takes two bytes
#string misc: each character after \n adds two bytestr
    #i.e. '\n': 0 bytes; '\n\n': 4 bytes; '\na':2 bytes

print("%d, %d" % tracemalloc.get_traced_memory()) #497
diff = int(491) #Change value of each additional int type: no change if same number of digits





            
       
       
       
       
       
       
       
       
                

""" 
JavaScript Equivalent:
for(let i = 0; i < Array.Length; i = i + 1)
{
    console.log(Array[i])
    //i is a number in this case
}


"""
