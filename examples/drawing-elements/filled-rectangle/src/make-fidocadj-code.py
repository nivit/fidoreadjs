#!/usr/bin/env python2
# -*- encoding: utf-8 -*-


out = open('filled-rectangle-example.fcd', 'w')

out.write("[FIDOCAD]\n")
l = 20 

c = 0
for n in range(0, 4):
	for i in range(0, 4):
		x1 = n * 2 * l
		y1 = i * l
		x2 = (n + 1) * l * 2
		y2 = (i + 1) * l
		out.write("RP %s %s %s %s %s\n" % (x1, y1, x2, y2, c ))
		c = c + 1
		if c > 17:
			c = 0
del out


