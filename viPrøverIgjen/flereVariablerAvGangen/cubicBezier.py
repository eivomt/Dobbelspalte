import numpy as np
import matplotlib.pyplot as plt


def cubicBezier(t, p0, p1, p2, p3):
    return (1-t)**3 * p0 + 3*(1-t)**2*t * p1 + 3*(1-t)*t**2 * p2 + t**3 * p3

def plotCubicBezier(p0, p1, p2, p3, numPoints=100):
    t_values = np.linspace(0, 1, numPoints)
    x_values = []
    y_values = []
    for t in t_values:
        x, y = cubicBezier(t, p0, p1, p2, p3)
        x_values.append(x)
        y_values.append(y)
    plt.plot(x_values, y_values, "o", zorder=1)
    plt.scatter([p0[0], p1[0], p2[0], p3[0]], [p0[1], p1[1], p2[1], p3[1]], color='red', zorder=2)
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.title('Cubic Bezier Curve')
    plt.grid(True, zorder=0)
    plt.show()

def cubicBezierYatT(p0,p1,p2,p3,t):
    y0 = p0[1]
    y1 = p1[1]
    y2 = p2[1]
    y3 = p3[1]

    y = y0*(1-t)**3 + 3*y1*t*(1-t)**2 + (3*y2*t**2)*(1-t) + y3*t**3

    return y

def cubicBezierXatT(p0,p1,p2,p3,t):
    x0 = p0[0]
    x1 = p1[0]
    x2 = p2[0]
    x3 = p3[0]

    x = x0*(1-t)**3 + 3*x1*t*(1-t)**2 + (3*x2*t**2)*(1-t) + x3*t**3

    return x

# Control points
p0 = np.array([0, 0])
p1 = np.array([3, 0])
p2 = np.array([6, 10])
p3 = np.array([10, 10])

xScaling = 1
yScaling = 6

p0[0] = p0[0] * xScaling
p1[0] = p1[0] * xScaling
p2[0] = p2[0] * xScaling
p3[0] = p3[0] * xScaling

p0[1] = p0[1] * yScaling
p1[1] = p1[1] * yScaling
p2[1] = p2[1] * yScaling
p3[1] = p3[1] * yScaling

# number of points to plot
# When this is to be implemented in the double slit script, one point equals one png.
# I have chosen a number divisible by 24, the standard framerate of film.
# If the mp4 file is neither slowed down nor sped up, 96 frames will equal 4 seconds of film.
numPoints = 96

# Markersize størrelse på prikker


def printTValues(numPoints):
    i=1
    numParticles = 0
    tValues = np.linspace(0,1,numPoints)
    for tValue in tValues:
        x = cubicBezierXatT(p0,p1,p2,p3,tValue)
        # print("x value at t = " + str("%.2f" % tValue) + " = " + str("%.2f" % x) + ", point number: " + str(i))
        y = cubicBezierYatT(p0,p1,p2,p3,tValue)
        print("y value at t = " + str("%.2f" % tValue) + " = " + str("%.0f" % y) + ", point number: " + str(i))
        i+= 1
        numParticles += int(y)
    print("Total number of particles = " + str(numParticles))


def yValues(numPoints):
    i=1
    yArray = []
    numParticles = 0
    tValues = np.linspace(0,1,numPoints)
    for tValue in tValues:
        y = cubicBezierYatT(p0,p1,p2,p3,tValue)
        i+= 1
        numParticles += int(y)
        yArray.append(int(y))
    print("Total number of particles = " + str(numParticles))
    return yArray

# printTValues(numPoints)
# print(yValues(numPoints))
plotCubicBezier(p0,p1,p2,p3,numPoints)


