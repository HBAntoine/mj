# MJ — Maître du Jeu — Game Design Document

## Concept
App mobile PWA de jeu grandeur nature style JRPG pixel art.
Plusieurs scénarios disponibles. Premier scénario : "Chercheur Menteur".

## Terrain
10 zones : Préau, Cuisine ext., Jardin, Parking, Piscine,
Cuisine, Salon, Entrée, Bar, Bibliothèque

## Joueurs
5 minimum, 20 maximum

## Scénario 1 — Chercheur Menteur
L'app cache secrètement un objet dans une zone au lancement.
Timer paramétrable (défaut 30 min après découverte).
Condition victoire 1 : posséder l'objet à la fin du timer.
Condition victoire 2 : être le plus riche si objet non trouvé.
Le possesseur peut volontairement recacher l'objet.

## Actions
- Fouiller (zone ou joueur) → objet/pièces/indice vague
- Voler (joueur) → pièces ou objet
- Parler (joueur) → dialogue semi-scripté selon dés
- Espionner (joueur) → historique zones + richesse selon dés
- Négocier (joueur) → transaction libre + possible arnaque

## Cooldown
Par cible, pas global.
Formule : cooldown_minutes = duree_partie_minutes * 0.12
Exemple : partie 30 min → cooldown 3.6 min par cible

## Système de dés (1d20)
- 1-5 : échec critique (malus supplémentaire)
- 6-10 : échec simple
- 11-15 : succès simple
- 16-19 : succès fort (bonus)
- 20 : succès critique (bonus maximum)

## Système de pitié
- Compteur d'échecs consécutifs par joueur par action
- Après 2 échecs : +15% probabilité succès
- Après 4 échecs : +35% probabilité succès
- Après 6 échecs : succès garanti
- Reset au premier succès

## Économie
Entrées : fouille (5-30 pièces), vol, quêtes annexes, vente
Sorties : indices (50/100/200 pièces), rachat objet, négociation
Soldes secrets sauf espionnage niveau 2+

## Compétences (0→3 étoiles)
Fouille : cooldown -20% / x2 pièces / voit zones fouillées
Vol : +10% succès / pièces bonus / vol silencieux
Espionnage : info 70% fiable / voit solde / voit si objet
Parler/Négo : +1 option / ment sans pénalité / détecte mensonges

## XP
Action réussie : +3 XP dans la compétence utilisée
Action échouée : +1 XP dans la compétence utilisée
Seuils niveau compétence : 0→1=5 XP, 1→2=12 XP, 2→3=25 XP
XP libre : gagné à chaque niveau global, à distribuer librement
Seuils niveau global : 0→1=10, 1→2=25, 2→3=45, 3→4=70,
                       4→5=100, 5→6=135, 6→7=175

## Archétypes et évolution visuelle
Guerrier : Écuyer (1-3) → Chevalier (4-6) → Paladin (7+)
Mage : Érudit (1-3) → Mage (4-6) → Archimage (7+)
Voleur : Gamin (1-3) → Filou (4-6) → Ombre (7+)
Barde : Troubadour (1-3) → Barde (4-6) → Ménestrel (7+)
Archer : Apprenti (1-3) → Archer (4-6) → Chasseur (7+)
Clerc : Novice (1-3) → Clerc (4-6) → Grand Prêtre (7+)
