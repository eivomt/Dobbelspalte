"""Denne koden finn Intensitetsfordelinga på skjermen
bak ei dobbeltspalte.
Inputs er 
wl - bølgelendga
d - avstanden mellom spaltene (midt til midt)
L - avstanden til skjermen
h_max - kor langt skjermen strekker seg (i kvar retning)

I tillegg er der nokre numeriske parametrar.
"""

# Bibliotek
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from scipy.interpolate import CubicSpline
import os

plt.ioff()

# Inputs
wl = 0.5
d = 100
L = 619

# Skjerm-høgda
y_max = 486

lambdaArray = [10, 20, 50]
dArray = [50, 100, 200]

imageIterator = 1

fig_dpi = 300

def setStringFile(figNum):
    return './' + str(imageIterator) + '/fig' + str(figNum) + '/' + 'fig.png'


# Funksjon for Intensitetensitet
def Intensitet(y, t):
    r1 = np.sqrt(L**2+(y-d/2)**2)
    E1 = np.sin(k*(r1-c*t))/r1
    r2 = np.sqrt(L**2+(y+d/2)**2)
    E2 = np.sin(k*(r2-c*t))/r2
    return (E1+E2)**2




for waveLength in lambdaArray:
    for distance in dArray:
        wl = waveLength
        d = distance
        ######### end of inputs ###################

        # Bølgefart
        c = 1
        # Bølgetal
        k = 2*np.pi/wl
        # Periode
        Tperiod = wl/c
        # Tperiod = 100

        # Gridpunkt - i h og t
        y_pkt = 972
        t_pkt= 666
        # Antal maksima å plotte
        n_max = int(np.floor(d*y_max/(wl*L)))

        # Presisjon i Newtons metode for å bestemme maksima
        pres = 1e-4

        #
        # Lagar Intensitetsfordeling på skjerm som funk. av høgde (h) og tid (t)
        #
        y = np.linspace(-y_max, y_max, y_pkt)
        y_step = y[1]- y[0]
        t = np.linspace(0, Tperiod, t_pkt)
        Y, T = np.meshgrid(y, t)

        # Matrise med Intensitetensitet på skjerm
        Imat = Intensitet(Y, T)
        # T = T + k*T
        # 2*T = tilbake til start
        # Imat = Intensitet(Y, T)




        # FIGURE 1





        # plt.clf()
        # Plottar funksjonen som fargekart
        plt.rcParams['figure.subplot.bottom'] = 0
        plt.rcParams['figure.subplot.top'] = 1
        plt.rcParams['figure.subplot.left'] = 0
        plt.rcParams['figure.subplot.right'] = 1
        fig = plt.figure(1, figsize=(666/fig_dpi, 972.5/fig_dpi), dpi=fig_dpi)
        plt.pcolormesh(T.T, Y.T, np.fliplr(Imat.T), shading = 'auto', 
                    cmap = cm.gray)
        # plt.xlabel('Tid')
        # plt.ylabel('y')
        plt.axis('off')
        plt.xticks([])  
        plt.yticks([])

        # plt.colorbar()
        strFile = setStringFile(1)
        if os.path.isfile(strFile):
            os.remove(strFile)
        plt.savefig(strFile, transparent=True)
        plt.clf()
        plt.close(fig)

        # plt.show()


        #
        # Bestemmer posisjonen for maksimum
        #
        # Funksjon som skal vere null (forskjell i avstand lik eit heiltal wl)
        def maks_funk(y, n):
            l1 = np.sqrt(L**2 + (y-d/2)**2)
            l2 = np.sqrt(L**2 + (y+d/2)**2)
            return np.abs(l1-l2)-n*wl

        # Den deriverte
        dy = 1e-3
        def deriv_funk(y, n):
            return (maks_funk(y+dy, n) - maks_funk(y-dy, n))/(2*dy)

        # Estimerar alle posisjonane med Newtons metode
        max_vektor = np.zeros(n_max)
        for n in range(1, n_max):
            # Kvalifisert start-gjetning
            yline = n*L*wl/d
            y_old = 10
            while np.abs(yline-y_old) > pres:
                y_old = yline
                # Newtons metode
                yline = yline - maks_funk(yline, n)/deriv_funk(yline, n)
            # Lagrar resultat i vektor
            max_vektor[n] = yline
            

        # Intensitetegrerar ut tida og plottar Intensitetensiteten
        Intensitet_vektor = np.trapz(Imat.T, t)

        # Plottar Intensitetensiteten (vanleg plott)
        # plt.figure(2)
        # plt.clf()
        # # Sjølve Intensitetentsistetsfunksjonen
        # plt.plot(y, Intensitet_vektor)
        # # Linjer for maksimum
        # plt.vlines(max_vektor, 0, 1.1*max(Intensitet_vektor), colors = 'red', linestyles = 'dashed')
        # plt.vlines(-max_vektor[1:], 0, 1.1*max(Intensitet_vektor), colors = 'red', 
        #            linestyles = 'dashed')
        # plt.xlabel('y')
        # plt.ylabel('Intensitetensitet')
        # plt.yticks([])
        # plt.axis([-y_max, y_max, 0, 1.1*np.max(Intensitet_vektor)])
        # plt.show()

        # Plottar Intensitetensiteten som søyle med farge
        y_double = np.zeros((2, y_pkt))     
        I_double = np.zeros((2, y_pkt))    
        # To rekker med h-verdiar
        y_double[0, :] = y
        y_double[1, :] = y
        # To rekker med Intensitetensitet
        I_double[0, :] = Intensitet_vektor
        I_double[1, :] = Intensitet_vektor





        # FIGURE 2





        # Plottet - som figur 1, men utan t
        plt.rcParams['figure.subplot.bottom'] = 0
        plt.rcParams['figure.subplot.top'] = 1
        plt.rcParams['figure.subplot.left'] = 0
        plt.rcParams['figure.subplot.right'] = 1
        fig = plt.figure(2, figsize=(666/fig_dpi, 972.5/fig_dpi), dpi=fig_dpi)
        plt.pcolormesh([0, 1], y_double.T, I_double.T, shading = 'auto', 
                    cmap = cm.gray)
        plt.axis('off')
        plt.xticks([])  
        plt.yticks([]) 
        strFile = setStringFile(2)
        if os.path.isfile(strFile):
            os.remove(strFile)
            print('hallo')
        plt.savefig(strFile, transparent=True)
        plt.clf()
        plt.close(fig)
        # plt.show()
            
        #
        # Lagar akkumulativ fordelingsfunksjon.
        #
        # Normering - totalt sannsyn lik 1
        itetegral_Intensitet = np.trapz(Intensitet_vektor, x=y)
        ProbDist = Intensitet_vektor/itetegral_Intensitet
        # Integrerar sannsynsfordeling - for � finne den akkumulative
        Akkumulative_dist = np.cumsum(ProbDist)*y_step

        # Funksjon som gir posisjon for tilfeldig tal
        Konvertere = CubicSpline(Akkumulative_dist, y)
        # Plottar konverteringsfunksjonen
        # plt.plot(Akkumulative_dist, y, 'g:')





        # FIGURE 3






        plt.rcParams['figure.subplot.bottom'] = 0
        plt.rcParams['figure.subplot.top'] = 1
        plt.rcParams['figure.subplot.left'] = 0
        plt.rcParams['figure.subplot.right'] = 1
        fig = plt.figure(3, figsize=(666/fig_dpi, 972.5/fig_dpi), dpi=fig_dpi)

        draw = np.linspace(0, 1, 500)
        plt.plot(draw, Konvertere(draw), 'r--')

        plt.grid(visible = True)
        plt.axis('off')
        plt.xticks([])  
        plt.yticks([])
        strFile = setStringFile(3)
        if os.path.isfile(strFile):
            os.remove(strFile)
        plt.savefig(strFile, transparent=True)
        plt.clf()
        plt.close(fig)
        # plt.show()

        num = np.random.rand(5000)




        # FIGURE 4





        plt.rcParams['figure.subplot.bottom'] = 0
        plt.rcParams['figure.subplot.top'] = 1
        plt.rcParams['figure.subplot.left'] = 0
        plt.rcParams['figure.subplot.right'] = 1
        fig = plt.figure(4, figsize=(666/fig_dpi, 972.5/fig_dpi), dpi=fig_dpi)
        plt.style.use('dark_background')
        # plt.grid(visible = False)
        # x skal her være et tilfeldig tall
        plt.plot(np.random.rand(5000), Konvertere(num), 'w.')
        # plt.show()
        strFile = setStringFile(4)
        if os.path.isfile(strFile):
            os.remove(strFile)
        plt.axis('off')
        plt.xticks([])  
        plt.yticks([]) 
        plt.savefig(strFile)
        plt.clf()
        plt.close(fig)

        plt.style.use('default')
        # funksjon(x_verdi) -> y verdi
        # Konvertere
        imageIterator += 1
