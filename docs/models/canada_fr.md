---
title: "Simulateur de politiques énergétiques pour le Canada"
---
**Dernière mise à jour de la page : Juin 2023**

L’Energy Policy Simulator (EPS) est un modèle informatique ouvert et gratuit de simulateur de politiques énergétiques créé à l’origine par [Energy Innovation LLC](https://energyinnovation.org/) et adapté au Canada en partenariat avec [l’Institut Pembina](http://www.pembina.org/).

## Téléchargement du modèle

L’Energy Policy Simulator pour le Canada peut être utilisé sur ce site Web depuis votre navigateur Web, ou la version complète peut être téléchargée sur votre ordinateur en cliquant sur le bouton ci-dessous. Notez que vous devrez suivre les étapes expliquées sur la [page de téléchargement de l’EPS](https://docs.energypolicy.solutions/download) afin d’installer le logiciel requis et d’utiliser la version complète du modèle.

<p><a href="https://github.com/EnergyInnovation/eps-canada/archive/refs/tags/3.4.7.zip" class="btn">Download the Canada Energy Policy Simulator</a></p>

## Maintien du statu quo (MSQ) – Base de référence 
### Hypothèses générales
* Le scénario du maintien du statu quo (MSQ) ne prend en compte que les politiques entièrement élaborées et qui avaient force de loi à la fin de 2021. Toute politique annoncée, en cours d’élaboration ou élaborée, mais qui n’a pas force de loi n’a pas été incluse dans le scénario du MSQ, mais sera prise en compte dans les scénarios de politiques supplémentaires. 

* Le modèle suppose que les politiques du Canada sont appliquées à l’échelle nationale. 

* Le prix intégral du carbone (p. ex. qui augmente la tarification du carbone de 15 dollar par tonne par année à compter de 2023, pour atteindre 170 dollar par tonne en 2030) est appliqué aux secteurs des transports et des bâtiments, mais pas aux autres secteurs, où le prix du carbone a été laissé à zéro. Cela s’explique par le fait que la tarification du carbone pour les autres secteurs comprend des attributions gratuites et qu’elle est appliquée différemment selon les provinces.  

  * L’utilisateur peut modifier le levier national de « tarification simplifiée du carbone » pour appliquer un prix du carbone supplémentaire (au-delà de l’hypothèse initiale) à n’importe quel secteur. Par exemple, l’ajout d’un prix du carbone de 10 dollar dans les secteurs des bâtiments et des transports donne un prix du carbone de 180 dollar par tonne, alors que l’application de 10 dollar dans le secteur industriel ne donnera que 10 dollar par tonne pour l’ensemble du secteur. Voir la description de la politique pour plus de détails.  

* Les projections jusqu’en 2050 reposent sur des sources qui utilisent des politiques prescrites par la loi en vigueur à la fin de l’année 2021.

* Les politiques prescrites par la loi en vigueur étaient considérées comme étant restées inchangées entre 2030 et 2050 (p. ex. le Règlement sur les combustibles propres, la taxe sur le carbone). 

* Lorsque des prévisions propres à une variable n’étaient pas disponibles, des prévisions pour des variables connexes ont été utilisées comme approximations pour modéliser les changements dans les années à venir. Pour les données présentant des lacunes entre les années, nous avons procédé à une interpolation linéaire entre les points de données et l’avons maintenue constante au-delà du dernier point de données.  

* Les structures de déclaration varient considérablement d’une source à l’autre, de sorte que lorsque les données proviennent de différentes sources, des correspondances doivent être établies pour déterminer comment les données se traduisent le plus précisément dans notre modèle. Ainsi, les données propres aux secteurs, aux fichiers et aux variables peuvent ne pas correspondre exactement à celles d’autres sources.

* Le scénario de référence Avenir énergétique du Canada en 2021 a été utilisé comme principal intrant pour les prévisions jusqu’en 2050, à moins qu’il n’existe un ensemble de données plus détaillées.

* Lorsque les données provinciales présentaient des écarts importants, une moyenne pondérée a été utilisée pour représenter les valeurs pour le Canada. 

* Les données du scénario du MSQ ont été complétées en utilisant les données du Canada, sauf lorsqu’il n’existe pas de données canadiennes dans le domaine public. Dans ces cas, les données américaines ont été utilisées, car elles devraient être semblables aux données canadiennes.

* Les résultats sur les émissions pour les années 2019 à 2021 ont été harmonisés avec ceux du Rapport d’inventaire national du Canada (RIN-2021) par secteur.   
## Principales sources de données
* Régie de l’énergie du Canada
* Ressources naturelles Canada
* Statistique Canada
* Transports Canada
* Environnement et Changement climatique Canada
* U.S. Energy Information Administration
* U.S. Environmental Protection Agency 
* National Renewable Energy Laboratory des États-Unis

## Hypothèses selon le secteur 


| Secteur | Hypothèse |
| --- | --- |
| Bâtiments | <ul><li>Les pourcentages de propriétés résidentielles en milieu urbain et rural sont présumés les mêmes jusqu’en 2050.</li><li>La tarification du carbone est présumée rester inchangée au-delà de 2030 et jusqu’en 2050, à 170 $ par tonne pour les secteurs concernés.</li></ul>|
| Captage et stockage du carbone (CSC)| <ul><li>Utilisation de l’approche du modèle américain, en appliquant les facteurs de capacité calculés pour les usines dotées de systèmes de CSC pour trouver la quantité de CO<sub>2</sub> captée.</li></ul>|
| Chauffage centralisé | <ul><li>La fraction de chauffage fournie par chaque combustible demeure constante (en l’absence de projections disponibles).</li></ul>|
| Électricité | <ul><li>Le modèle simplifie le Canada comme étant un seul réseau et ne permet pas de modéliser des sous-réseaux.</li><li>Le modèle utilise des séries chronologiques annuelles pour l’électricité, qui peuvent ne pas tenir compte des pics saisonniers des sous-réseaux. </li><li>Données américaines (données de l’ATB du NREL de 2022) utilisées pour les coûts de construction et d’entretien des capacités, ainsi que pour les rendements thermiques. L’équipe de modélisation de la Régie de l’énergie du Canada utilise le même ensemble de données, car elle a estimé qu’il était plus représentatif du Canada que les données canadiennes limitées disponibles.  </li><li>Le calendrier de mise au rencart des centrales au charbon a été ajusté dans le modèle pour tenir compte des mises au rencart prévues. Cela n’est pas pris en compte dans les fichiers d’entrée en raison des limitations de la façon dont les fichiers d’entrée tiennent compte de ces changements, mais a été mis en correspondance avec les résultats du scénario du MSQ.</li><li>L’apprentissage endogène est utilisé pour certaines variables (p. ex. les coûts des batteries, de l’énergie éolienne et de l’énergie solaire). Voir la documentation du modèle pour plus de détails sur [l’apprentissage endogène](https://docs.energypolicy.solutions/endogenous-learning).</li><li>L’hydroélectricité est traitée comme une centrale qui apporte de la souplesse au réseau (contrairement au modèle américain), car le Canada dispose d’une grande capacité hydroélectrique.</li><li>Aucun ajout de capacité de transmission n’est prévu dans le scénario du MSQ.</li><li>Les importations d’électricité sont présumées avoir la même composition de production que les États-Unis, puisque c’est le seul pays d’où le Canada importe de l’électricité. Le prix moyen de l’électricité aux États-Unis est également utilisé comme prix pour les importations d’électricité.</li></ul>|
| Combustibles | <ul><li>Lorsque certaines données sur les combustibles n’ont pu être trouvées pour le Canada, ce sont les données américaines sur les combustibles qui ont été utilisées (p. ex. les prix des biocombustibles).</li><li>La moyenne des taxes sur les carburants a été établie pour toutes les provinces et tous les territoires (car elles varient) et appliquée aux carburants.</li></ul>|
| Captage direct dans l’air | <ul><li>Le captage direct dans l’air (CDA) a été mis à l’échelle selon le PIB à partir des données de captage direct dans l’air de l’IEA, fondé sur un scénario de réchauffement de 1,5 °C.</li></ul>|
| Hydrogène | <ul><li>La part de la production d’hydrogène bleu par rapport à celle de la production d’hydrogène vert est tirée du rapport Avenir énergétique du Canada en 2021. Elle commence par une production d’hydrogène vert de 10 % et d’hydrogène bleu de 90 % de bleu en 2029 et passe à une production d’hydrogène vert de 20 % et d’hydrogène bleu de 80 % en 2050.</li></ul>|
| Industrie | <ul><li>La consommation de combustibles industriels dans le cadre du scénario du MSQ avant le CSC ne comprend pas les combustibles transformés en électricité. On présume que 100 % de l’énergie consommée par l’industrie des déchets est de l’électricité. </li><li>La demande d’énergie de l’industrie comprend l’utilisation par les producteurs.</li></ul>|
| Terres | <ul><li>La part de la forêt qui se prête à une gestion forestière améliorée a été estimée à 10 %.</li><li>Les projections des émissions de polluants issus de sources anthropiques du secteur UTCATF sont tirées du cinquième rapport biennal du Canada sur les émissions, de 2015 à 2019.</li><li>Une méthode linéaire pour remplir les valeurs de 2020 à 2030 a été utilisée pour atteindre la cible de -30 Mt d’éq. CO<sub>2</sub> du PRÉ pour 2030 du Canada.</li></ul>|
| Transports | <ul><li>Les véhicules hybrides rechargeables (VHR) légers sont équipés de moteurs à essence et les véhicules hybrides rechargeables (VHR) lourds ont des moteurs diesel.</li><li>Le modèle n’a pas de paramètre précis pour les véhicules de taille moyenne; à la place, le paramètre de « transport par motocyclette » (typiquement insignifiant) a été utilisé comme solution de rechange pour représenter les véhicules de taille moyenne dans le modèle. Le regroupement des données sur les véhicules de taille moyenne avec celles sur les véhicules lourds ou les véhicules légers n’a pas permis d’obtenir des résultats représentatifs avec les ensembles de données référencés. </li><li>Le prix intégral du carbone (c’est-à-dire augmentant de 15 $ par an à partir de 2023 jusqu’à atteindre 170 $ par tonne en 2030) est appliqué au secteur des transports.</li></ul>|



# Scénario(s) illustratif(s)

Deux scénarios sont inclus dans le simulateur à titre d’exemple d’ensembles de politiques. 

**“Le scénario Trajectoire vers 2030”** 
modélise une combinaison de politiques qui permet au Canada d’atteindre sa cible pour 2030. Il s’agit d’une approximation de nombreuses politiques prévues dans le Plan de réduction des émissions pour 2030 (PRÉ) du Canada, mais ne se limite pas aux seules politiques du PRÉ pour 2030. 

**“Le scénario Trajectoire vers 2050”** 
s’appuie sur le scénario Trajectoire vers 2030 auquel le niveau d’ambition des politiques mises en œuvre dans le cadre du PRÉ pour 2030 du Canada a été rehaussé, en augmentant l’ampleur des changements créés, en accélérant le calendrier de mise en œuvre proposé ou en prolongeant la tendance politique jusqu’à l’année 2050.

Pour obtenir une explication plus détaillée de ces scénarios et des réponses à d’autres questions courantes, veuillez envoyer un courriel à policysolutions@pembina.org.

# Remerciements aux contributeurs et aux évaluateurs
Nous tenons à remercier les personnes suivantes qui ont contribué à adapter l’Energy Policy Simulator au contexte canadien. Les personnes sont classées par ordre alphabétique.

* Andre Dixon, Institut Pembina

* Eyab Al-Aini, Institut Pembina

* Jared Connoy, Institut Pembina

* Jason Lam, Institut Pembina

* Olivia Ashmoore, Energy Innovation LLC

* Robbie Orvis, Energy Innovation LLC

# Historique des versions
## 3.4.7 – 12 juin 2023
* Mise à jour de la plateforme du modèle de la version 1.4.3 à la version 3.4.7
## 1.4.3 – 26 juin 2019
* Mise à jour des fichiers core vers la version 1.4.3
* Mise à jour des données du Canada pour qu’elles soient compatibles avec la version 1.4.3
* Diverses autres mises à jour des données sur le Canada
* Mise à jour des scénarios, ajout du scénario du gagnant du concours de conception de politique destiné aux jeunes
## 1.4.2 – 29 janvier 2019
* Mise à jour des fichiers core vers la version 1.4.2
* Mise à jour des données d’entrée du Canada pour qu’elles soient compatibles avec la version 1.4.2
* Mise à jour des scénarios
## 1.3.2 – 26 mars 2018
* Première diffusion publique
# Licence d’utilisation du logiciel
L’Energy Policy Simulator (EPS) est publié sous la licence publique générale GNU (version 3 ou toute version ultérieure) et est un logiciel ouvert et gratuit. Reportez-vous à la page de licence d’utilisation du logiciel pour plus de détails.

## Provenances des images
Le Parlement d’Ottawa de nuit<br/>
Doug Tanner<br/>
[https://www.flickr.com/photos/dougtanner/12688950314/](https://www.flickr.com/photos/dougtanner/12688950314/)<br/>
Licence : Attribution - Pas d’Utilisation Commerciale - Pas de Modification 2.0 Générique (CC BY-NC-ND 2.0)<br/>
Modifications : L’image a été recadrée, et un fondu a été appliqué sur le côté gauche.<br/>