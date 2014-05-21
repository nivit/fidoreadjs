#!/usr/bin/env python2
# -*- encoding: utf-8 -*-


out = open('empty-rectangle-example.fcd', 'w')

out.write("[FIDOCAD]\n")

offset = 5
border = 10

for n in range(0, 16):
	out.write("RV %s %s %s %s %s\n" %(n * offset + border, n * offset + border, (32 - (n -1)) * offset + border, (32 - n) * offset + border, n))

del out


