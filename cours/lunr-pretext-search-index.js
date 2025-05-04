var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "License",
  "number": "",
  "title": "License",
  "body": "  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1",
  "level": "1",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Équations différentielles linéaires d’ordre <span class=\"process-math\">\\(1\\)<\/span>",
  "body": " Équations différentielles linéaires d'ordre  Notations et conventions    désignera un -evn de dimension finie non nulle .  On fixe une base de .  sera un intervalle non trivial de .  On notera l'ensemble des fonctions de classe de dans .  Pour tout et , on notera le vecteur .      Rappels   L'application est bilinéaire.  Donc si est une application dérivable de dans et est une application dérivable de dans alors l'application est dérivable et on a     Soient des réels et un autre -evn de dimension finie .  Soit une fonction CPM . Pour toute application linéaire de dans        Solutions d'une équation différentielle linéaire du premier ordre  Notations et conventions  Dans toute cette section, on considère des applications continues Les notations suivantes seront valables tout au long de la première section de ce chapitre.  Une solution de sur est en fait de classe sur . En général si les fonctions et sont de classe alors les solutions de sont au moins de classe .    Forme générale  L'équation différentielle est dite une équation différentielle linéaire du premier ordre. L'inconnue est une fonction dérivable de dans .  Solutions de  On appelle solution de sur toute fonction telle que :  est dérivable sur ;  .  On notera l'ensemble des solutions de sur l'intervalle .  Équation homogène de  L'équation différenteielle linéaire du premier ordre est dite équation homogène (ou équation sans second membre) de .   Système différentiel asscocié  On fixe une base de l'espace et on note les applications composantes de et celles de dans la base . Alors équivaut au système d'équation où on a posé . Le système est dit système différentiel associé à dans la base . On notera celui associé à l'équation homogène et on les écrira sous forme compacte où , et .        est le sous-espace affine de passant par est de direction .     est un -ev.  Si une solution de sur alors .     Pour résoudre , il suffit de résoudre et de déterminer une solution particulière de .     de Cauchy-Lipchitz  Soit . Le problème de Cauchy admet une solution unique sur . C'est la seule fonction vérifiant    Ce résultat revient à démontrer qu'il n'y a qu'une fonction de classe qui vérifie     Existence On introduit la suite de fonctions définie par et En constantant ensuite que et en posant , on démontre par récurrence que Ce qui permet de justifier que la série de fonctions continues converge uniformément sur tout segment de . La suite de fonctions converge donc uniformément sur tout segment de vers une fonction continue sur et qui vérifie naturellement l'équation intégrale.  Unicité Si et sont des solutions du problème alors Ce qui permet de justifier par récurrence que pour tout  et donc que puisque ce dernier majorant converge vers .       Pour tout , l'application définie sur par est un isomorphisme de dans . En particulier     Principe de superposition   On considére deux EDL du premier ordre partageant la même équation homogène : Si est une solution de et est une solution de alors est une solution de l'equation       On considère un système différentiel homogène réel  étant une fonction continue de dans . Les solutions réelles de sont les parties réelles des solutions complexes.   Toute solution réelle de est sa propre partie réelle. Si maintenant est une solution complexe de alors, du fait que est une matrice réelle, est une solution de . L'ensemble des solution complexes de étant un -espace vectoriel, est une solution de .  Ce qui montre que les solutions réelles de sont les parties réelles de ses solutions complexes.     L'ensemble des solutions réelles est aussi l'ensemble des solutions à priori complexes qui prennent des valeurs réelles. Concrètement, une fois obtenu les solutions complexes, il suffit de déterminer les valeurs des paramètres en jeu qui permettent que la solution prennent uniquement des valeurs réelles.    Résolution pratique  Avertissement Sauf dans des cas très particuliers, il n'y a aucune méthode générale de résoultion des EDL du premier ordre.    On s'interesse au système différentiel homogène  Voir méthode de la variation des constantes pour la résolution du système avec second membre      On suppose que la matrice admet un vecteur propre qui ne dépend pas de associé à une valeur propre . En multipliant par et en posant on voit que Ce qui permet de calculer sachant qu'elle est une combinaison linéaire des composantes de . Cela permet d'exprimer l'une des fonctions inconnues en fonction des autres et donc, par report dans , de réduire le nombre de fonctions inconnues.    Dans le cas où les matrices se réduisent toutes sous la forme où est une matrice inversible qui ne dépend pas de et est une matrice plus simple (diagonale, triangulaire supérieure ou même diagonale par blocs) alors  Les solutions de sont les fonctions où est une solution quelconque du système qui est plus simple à traiter :   si est diagonale alors il est formé d'équations indépendantes en les composantes de     si est triangualaire supérieur alors il peut être résolu de proche en proche en commençant par la dernière équation.    Si est diagonale par bloc alors il peut être éclaté en plusieurs systèmes différentiels de tailles plus petites.          Résoudre le système différentiel     Le système s'ecrit La matrice est orthogonale directe donc en est un vecteur propre. C'est aussi un vecteur propre de . En multipliant la relation par on obtient l'equation en : En suivant la procédure standard de résoltion pour une EDL linéaire du premier ordre on a alors il existe tel que dans l'expression on reconnait le module et l'argument de donc En posant avec et en identifiant les parties réelle et imaginaire  est effectivement un -espace vectoriel de dimension . Il est engendré par les fonctions       Résoudre sur l'intervalle le système différentiel     Le système équivaut à avec On constate que la somme des deux colonnes de vaut avec . Donc est une vecteur propre de associé à la valeur propre . Comme alors l'autre valeur propre de est et après un calcul rapide le vecteur est un vecteur propre qui lui est associé. Ainsi En posant avec on obtient le système différentiel d'inconnues  Il existe donc tels que La relation se traduit pas et donc       Résoudre sur le système différentiel     Ici le système différentiel s'écrit avec    Ce qui prouve que est semblable dans à la matrice diagonale . Clairement est un vecteur propre de associé à la valeur propre et pour tout on a Comme prévu est une droite vectorielle. Elle est engendrée par le vecteur  étant une matrice réelle, est la droite engendrée par . Ainsi avec Si on pose maintenant avec alors Il existe donc tels que de quoi on déduit que les solutions complexes de sont données par cette solution est réelle si et donc en posant on peut écrire où . L'ensemble des solutions de cette forme est de dimension sur donc il est l'ensemble des solutions réelles de .      Système fondamental de solutions de l'équation homogène     On appelle système fondamental de solutions de l'équation homogène  toute base de .  Soient des solution de . On appelle wronksien dans la base du système de solutions de la fonction définie par       Soient des solution de . Soit leurs wronksien. Les assertions suivantes sont équivalentes :  est un système fondamental de solutions de ;  pour tout , la famille est une base de ;  il existe tel que soit une base de ;  pour tout , ;  il existe tel que .      Avec les notations de la proposition précédente :    Une famille de fonctions de dans peut très bien être libre sans que soit libre pour tout .   la fonction est soit partout nulle sur , soit ne s'annule en aucun point de ;   la famille est soit une base de pour tout soit elle est liée pour tout .      Équation du wronksien  Soient des solution de . Soit leurs wronksien dans . Alors      Ainsi la fonction est une solution sur de l'équation différentielle linéaire scalaire homogène du premier ordre Ce qui implique que son expression est de la forme où et est une primitive sur de la fonction . Ce qui confirme que est soit partout nulle, soit ne s'annule pas sur .    Méthode de la variation des constantes   Soit un système fondamental de solutions de . Pour toute fonction de classe  , il existe des fonctions uniques de classe de dans telles que     Méthode de la variation des constantes  On suppose qu'on connait un système fondamental de l'équation homogène et on pose    Grâce aux formules de Cramer,   Alors l'équation équivaut à      On veut résoudre complétement le système différentiel sachant que les fonctions et sont des solutions du système homogène.    Les fonctions et sont des solutions du système homogène associé à . Elles en constituent un SFS . Les solutions de sont donc données par où . En posant et , la métode de la variation des consantes aboutit à Système linéaire d'inconnues et et de déterminant . Il se résout en ce qui donne : où et sont des constantes quelconques. Les solutions du système différentiel de départ sont donc données par       Équation différentielle linéaire du premier ordre à coefficients constants   Soient un endomorphisme de et une application continue. Dans toute cette section, on considère l'équation différentielle et le système différentiel associé à dans la base   est dite une équation différentielle linéaire du premier ordre à coefficients constants. On notera l'équation homogène de et celle de .    Solutions d'une équation homogène à coefficients constants    Les solutions de l'équation homogène sur sont les fonctions où est un vecteur quelconque de .  Soit . L'unique solution sur du problème de Cauchy de l'équation homogène en est donnée par       Propriétés de l'exponentielle    On considère une algèbre de dimension finie . Pour tout , l'application est l'unique solution du problème de Cauchy Grâce à cette identification, on établit rapidement la propriété :   On se place dans l'algèbre . Si est un endomorphisme de alors      Remarques pratiques   Solutions propres de l'équation homogène  Soit une VAP éventuelle de . Pour tout VEP  de associé à , la fonction est une solution de sur .   Solution de l'équation homogène dans le cas où est diagonalisable  On suppose que est diagonalisable. On considère une base de diagonalisation de et on pose . Alors les solutions de sur sont les fonctions où sont des scalaires quelconques.   Méthode pratique de résolution du système homogène  On suppose que la matrice se réduit sous la forme . Alors la résolution du système différentiel passe donc par celle du système «plus simple» .  Noter aussi que puisque on peut directement fournir les solutions de en calculant . Ces solutions sont de la forme :  Quelque soit la méthode de calcul choisie, le calcul explicite de n'est pas nécessaire.   où est un vecteur quelconque de .      SFS et variation des constantes   Système fondamental de solution et wronksien  Soient et posons pour tout , .   Ces notions ont toutefois peu d'intérêt dans le cas d'une EDL à coefficients constants car on sait expliciter les solutions.    est un SFS de sur si et seulement si est une base de .  Le wronksien de dans la base est donné par      Variation des constantes  Les solutions de l'équation homogène étant les fonctions où est un vecteur quelconque de , faire varier les constantes revient à faire varier le vecteur . On pose donc de telle sorte que Cette présentation n'offre toutefois pas d'avantage pratique par rapport à la méthode générale de la variation des constantes puisqu'elle exige le calcul de l'exponentielle et donc le calcul de l'inverse de la matrice de passage dans une base de réduction.      Expression intégrale de la solution du problème de Cauchy   Soient et . L'unique solution de l'équation complète vérifiant la condition initiale est donnée par     Notons l'unique solution de telle que et posons La fonction est de classe et on a  est donc une primitive de la fonction . Puisque alors et donc      "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-4-3",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-4-3",
  "type": "Proposition",
  "number": "1.1",
  "title": "",
  "body": "  est le sous-espace affine de passant par est de direction .     est un -ev.  Si une solution de sur alors .     Pour résoudre , il suffit de résoudre et de déterminer une solution particulière de .   "
},
{
  "id": "cauchy-lipchitz",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#cauchy-lipchitz",
  "type": "Théorème",
  "number": "1.2",
  "title": "de Cauchy-Lipchitz.",
  "body": " de Cauchy-Lipchitz  Soit . Le problème de Cauchy admet une solution unique sur . C'est la seule fonction vérifiant    Ce résultat revient à démontrer qu'il n'y a qu'une fonction de classe qui vérifie     Existence On introduit la suite de fonctions définie par et En constantant ensuite que et en posant , on démontre par récurrence que Ce qui permet de justifier que la série de fonctions continues converge uniformément sur tout segment de . La suite de fonctions converge donc uniformément sur tout segment de vers une fonction continue sur et qui vérifie naturellement l'équation intégrale.  Unicité Si et sont des solutions du problème alors Ce qui permet de justifier par récurrence que pour tout  et donc que puisque ce dernier majorant converge vers .     "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-4-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-4-5",
  "type": "Corollaire",
  "number": "1.3",
  "title": "",
  "body": " Pour tout , l'application définie sur par est un isomorphisme de dans . En particulier   "
},
{
  "id": "prop-superposition",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#prop-superposition",
  "type": "Proposition",
  "number": "1.4",
  "title": "Principe de superposition.",
  "body": " Principe de superposition   On considére deux EDL du premier ordre partageant la même équation homogène : Si est une solution de et est une solution de alors est une solution de l'equation    "
},
{
  "id": "prop-solreelle",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#prop-solreelle",
  "type": "Proposition",
  "number": "1.5",
  "title": "",
  "body": "  On considère un système différentiel homogène réel  étant une fonction continue de dans . Les solutions réelles de sont les parties réelles des solutions complexes.   Toute solution réelle de est sa propre partie réelle. Si maintenant est une solution complexe de alors, du fait que est une matrice réelle, est une solution de . L'ensemble des solution complexes de étant un -espace vectoriel, est une solution de .  Ce qui montre que les solutions réelles de sont les parties réelles de ses solutions complexes.   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-4-8",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-4-8",
  "type": "Remarque",
  "number": "1.6",
  "title": "",
  "body": " L'ensemble des solutions réelles est aussi l'ensemble des solutions à priori complexes qui prennent des valeurs réelles. Concrètement, une fois obtenu les solutions complexes, il suffit de déterminer les valeurs des paramètres en jeu qui permettent que la solution prennent uniquement des valeurs réelles.  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-4-10",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-4-10",
  "type": "Exemple",
  "number": "1.7",
  "title": "",
  "body": "  Résoudre le système différentiel     Le système s'ecrit La matrice est orthogonale directe donc en est un vecteur propre. C'est aussi un vecteur propre de . En multipliant la relation par on obtient l'equation en : En suivant la procédure standard de résoltion pour une EDL linéaire du premier ordre on a alors il existe tel que dans l'expression on reconnait le module et l'argument de donc En posant avec et en identifiant les parties réelle et imaginaire  est effectivement un -espace vectoriel de dimension . Il est engendré par les fonctions    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-4-11",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-4-11",
  "type": "Exemple",
  "number": "1.8",
  "title": "",
  "body": "  Résoudre sur l'intervalle le système différentiel     Le système équivaut à avec On constate que la somme des deux colonnes de vaut avec . Donc est une vecteur propre de associé à la valeur propre . Comme alors l'autre valeur propre de est et après un calcul rapide le vecteur est un vecteur propre qui lui est associé. Ainsi En posant avec on obtient le système différentiel d'inconnues  Il existe donc tels que La relation se traduit pas et donc    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-4-12",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-4-12",
  "type": "Exemple",
  "number": "1.9",
  "title": "",
  "body": "  Résoudre sur le système différentiel     Ici le système différentiel s'écrit avec    Ce qui prouve que est semblable dans à la matrice diagonale . Clairement est un vecteur propre de associé à la valeur propre et pour tout on a Comme prévu est une droite vectorielle. Elle est engendrée par le vecteur  étant une matrice réelle, est la droite engendrée par . Ainsi avec Si on pose maintenant avec alors Il existe donc tels que de quoi on déduit que les solutions complexes de sont données par cette solution est réelle si et donc en posant on peut écrire où . L'ensemble des solutions de cette forme est de dimension sur donc il est l'ensemble des solutions réelles de .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-5-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-5-2",
  "type": "Vocabulaire",
  "number": "1.10",
  "title": "",
  "body": "   On appelle système fondamental de solutions de l'équation homogène  toute base de .  Soient des solution de . On appelle wronksien dans la base du système de solutions de la fonction définie par     "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-5-3",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-5-3",
  "type": "Proposition",
  "number": "1.11",
  "title": "",
  "body": " Soient des solution de . Soit leurs wronksien. Les assertions suivantes sont équivalentes :  est un système fondamental de solutions de ;  pour tout , la famille est une base de ;  il existe tel que soit une base de ;  pour tout , ;  il existe tel que .    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-5-4",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-5-4",
  "type": "Remarque",
  "number": "1.12",
  "title": "",
  "body": " Avec les notations de la proposition précédente :    Une famille de fonctions de dans peut très bien être libre sans que soit libre pour tout .   la fonction est soit partout nulle sur , soit ne s'annule en aucun point de ;   la famille est soit une base de pour tout soit elle est liée pour tout .    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-5-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-5-5",
  "type": "Proposition",
  "number": "1.13",
  "title": "Équation du wronksien.",
  "body": " Équation du wronksien  Soient des solution de . Soit leurs wronksien dans . Alors   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-6",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-6",
  "type": "Remarque",
  "number": "1.14",
  "title": "",
  "body": " Ainsi la fonction est une solution sur de l'équation différentielle linéaire scalaire homogène du premier ordre Ce qui implique que son expression est de la forme où et est une primitive sur de la fonction . Ce qui confirme que est soit partout nulle, soit ne s'annule pas sur .  "
},
{
  "id": "sec-varconst-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-varconst-2",
  "type": "Lemme",
  "number": "1.15",
  "title": "",
  "body": " Soit un système fondamental de solutions de . Pour toute fonction de classe  , il existe des fonctions uniques de classe de dans telles que   "
},
{
  "id": "variation-des-constantes",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#variation-des-constantes",
  "type": "Théorème",
  "number": "1.16",
  "title": "Méthode de la variation des constantes.",
  "body": " Méthode de la variation des constantes  On suppose qu'on connait un système fondamental de l'équation homogène et on pose    Grâce aux formules de Cramer,   Alors l'équation équivaut à   "
},
{
  "id": "sec-varconst-4",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-varconst-4",
  "type": "Exemple",
  "number": "1.17",
  "title": "",
  "body": "  On veut résoudre complétement le système différentiel sachant que les fonctions et sont des solutions du système homogène.    Les fonctions et sont des solutions du système homogène associé à . Elles en constituent un SFS . Les solutions de sont donc données par où . En posant et , la métode de la variation des consantes aboutit à Système linéaire d'inconnues et et de déterminant . Il se résout en ce qui donne : où et sont des constantes quelconques. Les solutions du système différentiel de départ sont donc données par    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-8-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-8-2",
  "type": "Conventions et notations",
  "number": "1.18",
  "title": "",
  "body": " Soient un endomorphisme de et une application continue. Dans toute cette section, on considère l'équation différentielle et le système différentiel associé à dans la base   est dite une équation différentielle linéaire du premier ordre à coefficients constants. On notera l'équation homogène de et celle de .  "
},
{
  "id": "solutions-homogenes-coefficients-constants",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#solutions-homogenes-coefficients-constants",
  "type": "Théorème",
  "number": "1.19",
  "title": "Solutions d’une équation homogène à coefficients constants.",
  "body": " Solutions d'une équation homogène à coefficients constants    Les solutions de l'équation homogène sur sont les fonctions où est un vecteur quelconque de .  Soit . L'unique solution sur du problème de Cauchy de l'équation homogène en est donnée par     "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-8-4",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-8-4",
  "type": "Corollaire",
  "number": "1.20",
  "title": "Propriétés de l’exponentielle.",
  "body": " Propriétés de l'exponentielle    On considère une algèbre de dimension finie . Pour tout , l'application est l'unique solution du problème de Cauchy Grâce à cette identification, on établit rapidement la propriété :   On se place dans l'algèbre . Si est un endomorphisme de alors     "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-ord-1-8-6",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#sec-eqdiff-equations-differentielles-lineaires-ord-1-8-6",
  "type": "Remarque",
  "number": "1.21",
  "title": "SFS et variation des constantes.",
  "body": "SFS et variation des constantes   Système fondamental de solution et wronksien  Soient et posons pour tout , .   Ces notions ont toutefois peu d'intérêt dans le cas d'une EDL à coefficients constants car on sait expliciter les solutions.    est un SFS de sur si et seulement si est une base de .  Le wronksien de dans la base est donné par      Variation des constantes  Les solutions de l'équation homogène étant les fonctions où est un vecteur quelconque de , faire varier les constantes revient à faire varier le vecteur . On pose donc de telle sorte que Cette présentation n'offre toutefois pas d'avantage pratique par rapport à la méthode générale de la variation des constantes puisqu'elle exige le calcul de l'exponentielle et donc le calcul de l'inverse de la matrice de passage dans une base de réduction.    "
},
{
  "id": "expression-solution-cauchy",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-ord-1.html#expression-solution-cauchy",
  "type": "Théorème",
  "number": "1.22",
  "title": "Expression intégrale de la solution du problème de Cauchy.",
  "body": " Expression intégrale de la solution du problème de Cauchy   Soient et . L'unique solution de l'équation complète vérifiant la condition initiale est donnée par     Notons l'unique solution de telle que et posons La fonction est de classe et on a  est donc une primitive de la fonction . Puisque alors et donc    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires",
  "level": "1",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html",
  "type": "Section",
  "number": "1.2",
  "title": "Équations différentielles linéaires scalaires, étude générale",
  "body": " Équations différentielles linéaires scalaires, étude générale   Le cadre général   désignera un entier strictement positif.  On considère des fonctions continues de dans .    L'équation différentielle   est dite une équation différentielle linéaire scalaire d'ordre . Une solution de sur est par définition une fonction de classe telle que   On notera l'ensemble de ces solutions.    L'équation homogène de est l'équation différentielle     Soient et . Une fonction est dite une solution sur du problème de Cauchy :   si c'est une solution de sur qui vérifie     En posant , l'équation se ramène au système différentiel linéaire du premier ordre :   est une matrice compagne pour tout .   avec  On notera le système homogène de .      Une fonction de classe est une solution de (resp. de ) sur si et seulement si la fonction définie par   est une solution du système différentiel (resp. de ) sur .  En outre, l'application   induit une bijection de sur (resp. de sur ).   induit un isomorphisme entre les -espaces vectoriels et .     Cauchy-Lipschitz  Pour tout , il existe une unique solution de sur telle que      est un -espace vectoriel de dimension .  pour toute solution de sur .     Soient des solutions de l'équation homogène . Nous dirons que est un système fondamental de solutions de si c'est une base de . Nous appellerons wronskien des solutions , le wronskien de dans la base canonique de :     Soient des solutions de l'équation homogène . Soit leur wronskien. Grâce à l'isomorphisme induit par , les assertions suivantes sont équivalentes :   est un système fondamental de solutions de ;  est un système fondamental de solutions de ;  ;  .    Équation du wronksien  Rappelons l'écriture de l'équation homogène :   Les wronskiens des solutions de ne dépendent que de la fonction .   Avec les notations de la proposition précédente, l'équation du wronskien donne ici :     Variation des constantes  Rappelons l'écriture de l'équation complète :   On suppose qu'on connaît un système fondamental de solutions de l'équation homogène . En posant   on a      Le cas d'une équation à coefficients constants   Solution d'une EDLS homogène à coefficients constants  Soient des scalaires . On considère l'équation différentielle linéaire scalaire homogène d'ordre dite à coefficients constants :   On appelle polynôme caractéristique de le polynôme :   Les solutions de sont en fait de classe sur .     Si est scindé sur , où sont les racines distinctes de , alors     Si mais n'est pas scindé sur :   où sont les racines réelles éventuelles de et ses racines complexes non réelles, alors les solutions réelles de sur sont les fonctions    Les solutions réelles de sont les parties réelles de ses solutions complexes.   où et sont des polynômes quelconques.      Commentaires sur la démonstration du théorème   Quelques aspects qui sont à la base de la démonstration du théorème précédent mais qui ont un intérêt intrinsèque . On introduit l'opérateur    Soit . La famille formée des fonctions est libre.   Il suffit de remarquer que si pour tout , étant un polynôme de , alors pour tout , soit .     Soit un polynôme de degré donné. Considérons l'EDLS homogène d'ordre :   Alors est un polynôme associé au polynôme caractéristique de et on a   En particulier, .    Si où et , alors    Observons que si et , alors   Et donc pour tout ,   Si , alors .  est de dimension et il contient les fonctions , , qui forment une famille libre. Elles en constituent donc une base. D'où le résultat.     Si est scindé sous la forme , où sont deux à deux distincts, alors le résultat précédent et le théorème de décomposition des noyaux impliquent que     Une conséquence de ce qui précède : si sont des scalaires deux à deux distincts et des polynômes quelconques, alors       Solution particulière quand  Soient et . Considérons l'EDLS à coefficients constants :   Une fonction de la forme plus générale avec est une solution de si et seulement si est une solution de l'équation homogène . Comme , alors ceci n'est possible que si est un polynôme de degré .   Alors admet une solution unique de la forme , où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ).   En posant pour l'instant , alors selon la remarque  est une solution de si et seulement si   Par définition de , on a et , donc cela équivaut à   Le polynôme à gauche de cette égalité a le même degré que , soit , d'où l'idée de remplacer par . Dans ce cas, serait de même degré que et l'égalité précédente équivaudrait à   En posant , il suffit maintenant de remarquer que l'application   est un endomorphisme de qui est injectif car il conserve le degré. C'est donc un isomorphisme de . Il existe donc un unique polynôme de degré (et donc ) qui vérifie l'égalité précédente. La fonction est une solution de .      Trouver les solutions complexes de l'EDLS : .  Trouver les solutions réelles de l'EDLS : .     "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-2-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-2-2",
  "type": "Conventions et notations",
  "number": "1.23",
  "title": "",
  "body": " désignera un entier strictement positif.  On considère des fonctions continues de dans .    L'équation différentielle   est dite une équation différentielle linéaire scalaire d'ordre . Une solution de sur est par définition une fonction de classe telle que   On notera l'ensemble de ces solutions.    L'équation homogène de est l'équation différentielle     Soient et . Une fonction est dite une solution sur du problème de Cauchy :   si c'est une solution de sur qui vérifie     En posant , l'équation se ramène au système différentiel linéaire du premier ordre :   est une matrice compagne pour tout .   avec  On notera le système homogène de .    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-2-3",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-2-3",
  "type": "Proposition",
  "number": "1.24",
  "title": "",
  "body": " Une fonction de classe est une solution de (resp. de ) sur si et seulement si la fonction définie par   est une solution du système différentiel (resp. de ) sur .  En outre, l'application   induit une bijection de sur (resp. de sur ).   induit un isomorphisme entre les -espaces vectoriels et .   "
},
{
  "id": "theo-cauchy-lipschitz",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#theo-cauchy-lipschitz",
  "type": "Théorème",
  "number": "1.25",
  "title": "Cauchy-Lipschitz.",
  "body": " Cauchy-Lipschitz  Pour tout , il existe une unique solution de sur telle que   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-2-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-2-5",
  "type": "Corollaire",
  "number": "1.26",
  "title": "",
  "body": "  est un -espace vectoriel de dimension .  pour toute solution de sur .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-2-6",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-2-6",
  "type": "Vocabulaire",
  "number": "1.27",
  "title": "",
  "body": " Soient des solutions de l'équation homogène . Nous dirons que est un système fondamental de solutions de si c'est une base de . Nous appellerons wronskien des solutions , le wronskien de dans la base canonique de :   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-2-7",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-2-7",
  "type": "Proposition",
  "number": "1.28",
  "title": "",
  "body": " Soient des solutions de l'équation homogène . Soit leur wronskien. Grâce à l'isomorphisme induit par , les assertions suivantes sont équivalentes :   est un système fondamental de solutions de ;  est un système fondamental de solutions de ;  ;  .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-2-8",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-2-8",
  "type": "Proposition",
  "number": "1.29",
  "title": "Équation du wronksien.",
  "body": "Équation du wronksien  Rappelons l'écriture de l'équation homogène :   Les wronskiens des solutions de ne dépendent que de la fonction .   Avec les notations de la proposition précédente, l'équation du wronskien donne ici :   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-2-9",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-2-9",
  "type": "Proposition",
  "number": "1.30",
  "title": "Variation des constantes.",
  "body": " Variation des constantes  Rappelons l'écriture de l'équation complète :   On suppose qu'on connaît un système fondamental de solutions de l'équation homogène . En posant   on a   "
},
{
  "id": "theo-eqscal",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#theo-eqscal",
  "type": "Théorème",
  "number": "1.31",
  "title": "Solution d’une EDLS homogène à coefficients constants.",
  "body": " Solution d'une EDLS homogène à coefficients constants  Soient des scalaires . On considère l'équation différentielle linéaire scalaire homogène d'ordre dite à coefficients constants :   On appelle polynôme caractéristique de le polynôme :   Les solutions de sont en fait de classe sur .     Si est scindé sur , où sont les racines distinctes de , alors     Si mais n'est pas scindé sur :   où sont les racines réelles éventuelles de et ses racines complexes non réelles, alors les solutions réelles de sur sont les fonctions    Les solutions réelles de sont les parties réelles de ses solutions complexes.   où et sont des polynômes quelconques.    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-3-3-4-1-1-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-3-3-4-1-1-2",
  "type": "Explication",
  "number": "1.1",
  "title": "",
  "body": " Il suffit de remarquer que si pour tout , étant un polynôme de , alors pour tout , soit .  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-3-3-4-1-3-3",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-3-3-4-1-3-3",
  "type": "Explication",
  "number": "3.1",
  "title": "",
  "body": " Observons que si et , alors   Et donc pour tout ,   Si , alors .  est de dimension et il contient les fonctions , , qui forment une famille libre. Elles en constituent donc une base. D'où le résultat.  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-3-4",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-3-4",
  "type": "Proposition",
  "number": "1.32",
  "title": "Solution particulière quand <span class=\"process-math\">\\(\\varphi(t) = R(t) \\e^{\\lambda t}\\)<\/span>.",
  "body": " Solution particulière quand  Soient et . Considérons l'EDLS à coefficients constants :   Une fonction de la forme plus générale avec est une solution de si et seulement si est une solution de l'équation homogène . Comme , alors ceci n'est possible que si est un polynôme de degré .   Alors admet une solution unique de la forme , où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ).   En posant pour l'instant , alors selon la remarque  est une solution de si et seulement si   Par définition de , on a et , donc cela équivaut à   Le polynôme à gauche de cette égalité a le même degré que , soit , d'où l'idée de remplacer par . Dans ce cas, serait de même degré que et l'égalité précédente équivaudrait à   En posant , il suffit maintenant de remarquer que l'application   est un endomorphisme de qui est injectif car il conserve le degré. C'est donc un isomorphisme de . Il existe donc un unique polynôme de degré (et donc ) qui vérifie l'égalité précédente. La fonction est une solution de .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaires-3-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaires.html#sec-eqdiff-equations-differentielles-lineaires-scalaires-3-5",
  "type": "Exemple",
  "number": "1.33",
  "title": "",
  "body": "  Trouver les solutions complexes de l'EDLS : .  Trouver les solutions réelles de l'EDLS : .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2",
  "level": "1",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html",
  "type": "Section",
  "number": "1.3",
  "title": "Équations linéaires scalaires du deuxième ordre",
  "body": " Équations linéaires scalaires du deuxième ordre   Sous le thème des équations différentielles, les équations linéaires scalaires du deuxième ordre sont les équations les plus fréquemment abordées dans les sujets de concours.    Soient et des applications continues de dans . On considère l'EDLS du deuxième ordre :  Une solution de sur est une fonction telle que :  est deux fois dérivable sur ;  .   L'équation est dite normalisée si est constante de valeur et normalisable si ne s'annule pas sur .   Remarque  Si est normalisable, alors elle est équivalente à l'équation normalisée obtenue en la divisant par . En général, est équivalente à toute équation de la forme :  où est une fonction continue qui ne s'annule pas sur .   Attention donc, les résultats du cadre général ne sont applicables à que si elle est normalisable. En particulier, la dimension de l'ensemble des solutions de l'équation homogène peut être strictement supérieure à .  Dans le cas où est normalisable, elle équivaut au système différentiel : où   On notera l'équation homogène de et celle de .    Récapitulatif  Dans cette rubrique, on ne fera qu'adapter les énoncés du cadre général au cas particulier d'une EDLS du deuxième ordre normalisable.  On suppose donc que l'équation est normalisable.   Théorème de Cauchy-Lipschitz  Pour tout , il existe une unique solution de telle que :     Structure des ensembles de solutions  est un -espace vectoriel de dimension , et pour toute solution de sur .    Système de solutions et wronskien  Si et sont des solutions de l'équation homogène , on appelle wronskien de et la fonction définie par :   La famille est une base de si et seulement si ne s'annule pas sur . Pour cela, il suffit qu'il ne s'annule pas en un point de .    Équation du wronskien   Le wronskien de deux solutions de ne dépend donc pas de la fonction .   Soit le wronskien de deux solutions quelconques de . Alors :     Variations des constantes  On suppose qu'on connaît une base de . On note leur wronskien. En remplaçant par dans le système différentiel , alors :   Les solutions de sur sont donc les fonctions :   où les fonctions et sont données par :    Une solution particulière  En fixant un point , on obtient une solution particulière de en posant  en dérivant la relation on voit en outre que De quoi on déduit que est l'unique solution de qui vérifie .    Expression complète des solutions de  Les solutions de sont ainsi les fonctions de la forme où sont des scalaires quelconques dans .   Solution du problème de Cauchy  Soient . Sur la base de la relation l'unique solution de qui vérifie et est déterminée par le système linéaire d'inconnues et  : dont le déterminant est .        Spécificités des EDLS du second ordre  Dans cette rubrique, on examine quelques spécificités des équations linéaires scalaires du deuxième ordre. On considère les équations différentielles qu'on suppose normalisables sur :    Solutions passant par un même point   Chacune de ces solutions est entièrement déterminée par .   Pour tout , il existe une infinité de solutions de telles que .  Si et sont des solutions distinctes de l'équation homogène vérifiant la condition , alors :   et puisque , alors .     Système fondamental canonique en un point  Soit . On appelle système fondamental canonique de solutions de en le couple de solutions de définies par :   . est bien un système fondamental de solutions de .    , ;  , .   L'intérêt et qu'on obtienne des expressions simplifiées des solutions de et de :   Les solutions de sont données par :   Les solutions de sont données par :     pour rappel, .    Wronskien croisé  On considère deux EDLS homogènes normalisables sur (qui ne diffèrent que par le coefficient de ) :   Soient une solution de sur et une solution de sur . En posant , on a : c'est l'équation du wronksien croisé des équations et .   Par dérivation du déterminant selon les lignes :   En utilisant les équations différentielles, on obtient :   d'où le résultat.       Techniques de résolution  Cette rubrique rassemble quelques remarques pratiques qui peuvent mener à la résolution d'une équation linéaire scalaire du deuxième ordre.   Il n'existe aucune méthode générale qui permet de résoudre toutes les EDLS d'ordre 2.   Dans les deux techniques suivantes, on suppose que est normalisable sur et qu'on connaît une solution de l'équation homogène qui ne s'annule pas sur .    Méthode de Lagrange  On pose et on remplace dans pour obtenir l'équation : Cette équation peut être regardée comme une EDLS du premier ordre en .  Par ailleurs, en multipliant par , on obtient la forme plus mnémonique :   où et . Ce qui donne la forme générale de :   où est quelconque dans et est une primitive de sur .   Méthode du wronskien  L'idée est d'utiliser le fait que les wronskiens de sont les solutions de l'équation :   La méthode du wronskien permet de résoudre l'équation homogène . Celle de Lagrange permet, si on le désire, de résoudre l'équation complète .      Solutions développables en série entière   L'ensemble des solutions de l'équation homogène qui sont développables en série entière en est un sous-espace vectoriel de .   Si les fonctions , et sont polynomiales, il est fort possible que admette des solutions développables en série entière en , parfois polynomiales.       Cas d'une EDLS à coefficients constants  On rappelle ici l'expression des solutions d'une EDLS d'ordre 2 à coefficients constants : On note et les racines dans du polynôme caractéristique de :    Solutions de l'équation homogène  les solutions de sur à valeurs dans sont de la forme :   si et ;  si ;  si et .   À chaque fois, et sont des scalaires quelconques dans .    Solution particulière de dans le cas où  si est de la forme où est une fonction polynomiale à coefficients dans et , alors admet une solution unique de la forme : où est la multiplicité de en tant que racine du polynôme caractéristique de et est un polynôme qui a le même degré que à déterminer.    Solution particulière dans le cas général  sur la base de la relation , étant un point quelconque choisi dans , admet une solution de la forme : où  Tout calcul fait :  si ;  si ;  si .       Exemples non génériques    Résoudre en observant que est une solution :     Résoudre en commençant par chercher des solutions polynomiales de l'équation homogène :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en posant et en étudiant le raccord en :       Équation de Cauchy-Euler   On considère l'équation L'équation n'est pas normalisable en .  On cherche les solutions sur qui sont de la forme . Pour que soit une solution, il faut et il suffit que soit une racine du polynôme :  Si et sont les racines de dans , les solutions de sur sont de la forme :  si ;  si ;  si et .    Autre méthode :  Si on pose , alors équivaut sur à l'EDLS à coefficients constants : équation à coefficients constants qui a pour polynôme caractéristique .    Équation d'Airy   On considère l'équation : On cherche les solutions développables en série entière sur .    En remplaçant par dans , on obtient : Ce qui revient à : ou encore, pour tout : Alors les solutions de sur sont les fonctions données par : où et sont quelconques dans et : On notera que les séries entières qui interviennent dans les expressions de et sont bien de rayon de convergence infini.     Équation d'Hermite :    où est un réel positif ou nul. On cherche les solutions développables en série entière sur .    Comme pour l'équation d'Airy, admet effectivement des solutions développables en série entière sur  En remplaçant dans , on obtient : Et donc pour tout :  Si on prolonge la fonction d'Euler sur par la relation : De cette manière, elle continuera à vérifier l'équation fonctionnelle : et donc : Avec respectivement et , on obtient les écritures : d'où les solutions de : avec :   En fait, les écritures précédentes ne sont valables que si et . Dans le cas contraire, en revenant aux relations précédentes, on aura :   Si , c'est-à-dire avec , alors :    Dans ce cas, la fonction est polynomiale.  Si , c'est-à-dire avec , alors :    Dans ce cas, c'est la fonction qui est polynomiale.   On notera que si est un entier positif, alors admet au moins une solution polynomiale. Cette solution est paire si est pair et impaire si est impair.     Équation de Tchebytchev   On considère l'équation différentielle :   où est un réel positif. On cherche les solutions développables en série entière sur .    En remplaçant par dans l'équation, on obtient la relation de récurrence :   Pour tout , on a :   Par suite, les solutions de l'équation sur sont les fonctions données par : où :   On peut de manière directe prouver que l'équation admet au moins une solution polynomiale si : c'est le polynôme de Tchebychev défini par :   On notera que :   Si est un entier positif pair, avec , alors si et est une fonction polynomiale paire de degré .  Si est un entier positif impair, avec , alors si et est une fonction polynomiale impaire de degré .  Si est un entier positif, alors l'équation admet au moins une solution polynomiale.      Transformation d'une EDLS du second ordre  Pour la simplification de l'étude de certaines proriétés des solutions d'une EDLS du second ordre, on la transforme en des formes plus adaptées. La suite expose les deux transformations les plus utilisées.    Forme normale d'une EDLS du deuxième ordre  On suppose que les fonctions et sont de classe . Alors il existe une fonction de classe qui ne s'annule pas sur telle qu'en posant , soit équivalente à une équation de la forme : Cette équation est dite une forme normale de l'équation .   Supposons pour l'instant qu'une telle fonction existe. On a alors :   sera de ce fait équivalente à l'EDLS d'inconnue :   L'équation du wronskien de est . Tous ses wronskiens sont constants.   En choisissant comme une solution non nulle de l'équation du premier ordre :   elle sera effectivement de classe car et sont supposées de classe , ne s'annulera pas sur et on aura :   Les équations de type sont souvent associées à l'étude de la distribution des zéros d'une solution sur , de l'existence de solutions périodiques dans le cas où la fonction est périodique...   avec :     Forme auto-adjointe  On suppose que la fonction est de classe sur . Alors il existe une fonction de classe ne s'annulant pas sur et une fonction continue sur telle que soit équivalente à l'équation :   L'équation du wronskien de est . Tous les wronskiens de sont proportionnels à .     Cette équation est dite une forme auto-adjointe de l'équation homogène .   Contrairement à une forme normale de , on conserve la même fonction inconnue .    Considérons pour l'instant une fonction quelconque de classe et ne s'annulant pas sur . Alors :   Si on choisit comme une solution non nulle sur de l'EDLS du premier ordre :   on aura et se ramène donc à :   Il suffit de poser qui est bien de classe et ne s'annule pas sur et .      "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-2",
  "type": "Mise en garde",
  "number": "1.34",
  "title": "",
  "body": " Sous le thème des équations différentielles, les équations linéaires scalaires du deuxième ordre sont les équations les plus fréquemment abordées dans les sujets de concours.  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-3",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-3",
  "type": "Conventions et notations",
  "number": "1.35",
  "title": "",
  "body": " Soient et des applications continues de dans . On considère l'EDLS du deuxième ordre :  Une solution de sur est une fonction telle que :  est deux fois dérivable sur ;  .   L'équation est dite normalisée si est constante de valeur et normalisable si ne s'annule pas sur .   Remarque  Si est normalisable, alors elle est équivalente à l'équation normalisée obtenue en la divisant par . En général, est équivalente à toute équation de la forme :  où est une fonction continue qui ne s'annule pas sur .   Attention donc, les résultats du cadre général ne sont applicables à que si elle est normalisable. En particulier, la dimension de l'ensemble des solutions de l'équation homogène peut être strictement supérieure à .  Dans le cas où est normalisable, elle équivaut au système différentiel : où   On notera l'équation homogène de et celle de .  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-5-3-1-1-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-5-3-1-1-5",
  "type": "Explication",
  "number": "1.1",
  "title": "",
  "body": " et puisque , alors .  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-5-3-1-3-4",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-5-3-1-3-4",
  "type": "Explication",
  "number": "3.1",
  "title": "",
  "body": " Par dérivation du déterminant selon les lignes :   En utilisant les équations différentielles, on obtient :   d'où le résultat.  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-8",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-8",
  "type": "Exemple",
  "number": "1.36",
  "title": "Exemples non génériques.",
  "body": " Exemples non génériques    Résoudre en observant que est une solution :     Résoudre en commençant par chercher des solutions polynomiales de l'équation homogène :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en posant et en étudiant le raccord en :     "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-9",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-9",
  "type": "Exemple",
  "number": "1.37",
  "title": "Équation de Cauchy-Euler.",
  "body": " Équation de Cauchy-Euler   On considère l'équation L'équation n'est pas normalisable en .  On cherche les solutions sur qui sont de la forme . Pour que soit une solution, il faut et il suffit que soit une racine du polynôme :  Si et sont les racines de dans , les solutions de sur sont de la forme :  si ;  si ;  si et .    Autre méthode :  Si on pose , alors équivaut sur à l'EDLS à coefficients constants : équation à coefficients constants qui a pour polynôme caractéristique .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-10",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-10",
  "type": "Exemple",
  "number": "1.38",
  "title": "Équation d’Airy.",
  "body": "Équation d'Airy   On considère l'équation : On cherche les solutions développables en série entière sur .    En remplaçant par dans , on obtient : Ce qui revient à : ou encore, pour tout : Alors les solutions de sur sont les fonctions données par : où et sont quelconques dans et : On notera que les séries entières qui interviennent dans les expressions de et sont bien de rayon de convergence infini.   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-11",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-11",
  "type": "Exemple",
  "number": "1.39",
  "title": "Équation d’Hermite :.",
  "body": " Équation d'Hermite :    où est un réel positif ou nul. On cherche les solutions développables en série entière sur .    Comme pour l'équation d'Airy, admet effectivement des solutions développables en série entière sur  En remplaçant dans , on obtient : Et donc pour tout :  Si on prolonge la fonction d'Euler sur par la relation : De cette manière, elle continuera à vérifier l'équation fonctionnelle : et donc : Avec respectivement et , on obtient les écritures : d'où les solutions de : avec :   En fait, les écritures précédentes ne sont valables que si et . Dans le cas contraire, en revenant aux relations précédentes, on aura :   Si , c'est-à-dire avec , alors :    Dans ce cas, la fonction est polynomiale.  Si , c'est-à-dire avec , alors :    Dans ce cas, c'est la fonction qui est polynomiale.   On notera que si est un entier positif, alors admet au moins une solution polynomiale. Cette solution est paire si est pair et impaire si est impair.   "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-12",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-12",
  "type": "Exemple",
  "number": "1.40",
  "title": "Équation de Tchebytchev.",
  "body": " Équation de Tchebytchev   On considère l'équation différentielle :   où est un réel positif. On cherche les solutions développables en série entière sur .    En remplaçant par dans l'équation, on obtient la relation de récurrence :   Pour tout , on a :   Par suite, les solutions de l'équation sur sont les fonctions données par : où :   On peut de manière directe prouver que l'équation admet au moins une solution polynomiale si : c'est le polynôme de Tchebychev défini par :   On notera que :   Si est un entier positif pair, avec , alors si et est une fonction polynomiale paire de degré .  Si est un entier positif impair, avec , alors si et est une fonction polynomiale impaire de degré .  Si est un entier positif, alors l'équation admet au moins une solution polynomiale.    "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-13-3-1-1-3",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-13-3-1-1-3",
  "type": "Explication",
  "number": "1.1",
  "title": "",
  "body": " Supposons pour l'instant qu'une telle fonction existe. On a alors :   sera de ce fait équivalente à l'EDLS d'inconnue :   L'équation du wronskien de est . Tous ses wronskiens sont constants.   En choisissant comme une solution non nulle de l'équation du premier ordre :   elle sera effectivement de classe car et sont supposées de classe , ne s'annulera pas sur et on aura :   Les équations de type sont souvent associées à l'étude de la distribution des zéros d'une solution sur , de l'existence de solutions périodiques dans le cas où la fonction est périodique...   avec :  "
},
{
  "id": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-13-3-1-2-7",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2.html#sec-eqdiff-equations-differentielles-lineaires-scalaire-ordre-2-13-3-1-2-7",
  "type": "Explication",
  "number": "2.1",
  "title": "",
  "body": " Considérons pour l'instant une fonction quelconque de classe et ne s'annulant pas sur . Alors :   Si on choisit comme une solution non nulle sur de l'EDLS du premier ordre :   on aura et se ramène donc à :   Il suffit de poser qui est bien de classe et ne s'annule pas sur et .  "
},
{
  "id": "sec-eqdiff-exercices-approfondissement",
  "level": "1",
  "url": "sec-eqdiff-exercices-approfondissement.html",
  "type": "Exercices",
  "number": "1.4",
  "title": "Exercices d’approfondissement",
  "body": " Exercices d'approfondissement   Lemme de Gronwall  Soit un intervalle de . On fixe un point de .  Version réelle   Soit une application continue positive . On suppose qu'il existe continue positive et tels que Montrer que    On introduit la fonction définie sur par  est de classe et on a Si , la fonction étant positive, on a et donc . La fonction est donc décroissante sur l'intervalle . Ce qui conduit à pour tout et ainsi Soit    Version vectorielle   On considère une fonction continue . On suppose qu'il existe continue et tels que Montrer que    Il suffit d'appliquer le résultat précédent aux fonctions continues positives et en remarquant que    Application   Utiliser ce résultat pour montrer l'unicité de la solution d'un problème de Cauchy relatif à une EDL du premier ordre.    Voir exercices d'approfondissement      Expression des solutions quand    On considère une EDL du premier ordre homogène et on suppose que pour tous . On fixe . Montrer que les solutions de sont les fonctions où est un vecteur quelconque de . Quel est l'unique solution de telle que lorsque est donnée ?    Soit et considérons les fonctions  est dérivable de dérivée et on a pour tout  Un résultat usuel affirme que dans ce cas, l'application est dérivable de dérivée . Ensuite, cela implique que la fonction est dérivable et que La fonction est donc une solution de . C'est l'unique solution de qui vérifie . Le vecteur étant quelconque dans , cela prouve que toutes les solutions de sont de la forme de .      Résoudre sur le système différentiel lorsque    La condition est bien vérifiée et on a et ensuite Alors les solutions du système différentiel sont les fonctions      Solutions bornées d'une équation différentielle linéaire à coefficients constants   Soit .     Montrer que l'application est bornée sur si et seulement si        Considérons une formule de trigonalisation où où sont les valeurs propres distinctes de , leurs multiplicités respectives et des matrices nilpotentes. Alors avec L'application est donc bornée sur si et seulement si toutes les applications le sont. Or si et est une matrice nilpotente d'indice de nilpotence , alors Puisque , alors la fonction est bornée sur si et seulement si ( et ) ou ( et ). On en déduit que la fonction est bornée si et seulement si Et finalement, l'application est bornée si et seulement si sachant que la condition équivaut à ou encore que le sous-espace propre de en est égal à son sous-espace caractéristique.      Quelles sont les solutions du système différentiel qui sont bornées ?    Soit et considérons la solution . Décomposons sous la forme où pour tout , . On peut poser pour tout  où . On a alors pour tout , et donc est bornée si et seulement si les fonctions sont toutes bornées.  Si , alors la matrice est bornée et donc est bornée.  Si , on introduit l'entier . On peut alors écrire La fonction est bornée si et seulement si les fonctions sont bornées. Alors ne peut être bornée que si , c'est-à-dire si ou encore .  Si , alors n'est pas bornée et donc ne peut être bornée que si ou encore .  Ainsi, la solution de est bornée si et seulement si où et .      Théorème de l'application spectrale   Soit une série entière de rayon de convergence infini. On note sa somme sur .   Montrer que pour toute matrice , la série converge. On note également sa somme.  Montrer que .  Soit une valeur propre de . On suppose que pour toute valeur propre de telle que . Montrer que   On suppose que induit une injection sur . Soit .   Montrer que les valeurs propres de et de ont la même multiplicité.  Montrer que si , alors         Pour tout , on a . Puisque la série entière a un rayon de convergence infini, la série converge et donc la série converge absolument.  Écrivons une formule de trigonalisation de : où chaque bloc étant triangulaire supérieure avec une même valeur propre de sur sa diagonale. On peut alors justifier que avec et est triangulaire supérieure d'éléments diagonaux tous égaux à . Ainsi,   Posons Soit une valeur propre de telle que . On a alors pour tout  Ainsi, . Par suite, . La réciproque nécessite le recours à la réduction de Jordan. Examinons ce qui se passe avec une cellule de Jordan dans la décomposition de . Pour tout , on peut écrire Avec la convention si . Pour chaque , on a Donc la série est convergente de somme . Par linéarité de la somme d'une série convergente, on a donc Concrètement, est de la forme Ainsi, est triangulaire supérieure stricte et tous les coefficients sur sa deuxième diagonale supérieure valent . Elle est donc échelonnée de rang . Si on écrit maintenant où est la réduite de Jordan de , alors . Soit la liste de toutes les cellules de Jordan de qui correspondent à des valeurs propres de telle que et soit le bloc diagonal qui regroupe toutes les autres cellules et dont la taille sera notée , quitte à réordonner toutes les cellules de , on peut écrire Le bloc est inversible car ne figure pas dans la diagonale de . Donc D'un autre côté, pour chaque valeur propre de , le nombre de cellules de Jordan de relative à est égal à . Ce qui prouve que et ainsi En conclusion,     Reprenons l'expression de donnée précédemment où est la multiplicité de la valeur propre de . Puisque on a supposé que induit une injection sur , alors les nombres sont distincts et donc est une racine de multiplicité de .  On suppose que . Il va falloir passer encore par la réduction de Jordan de la matrice .        Application résolvante d'une équation différentielle linéaire  On considère une EDL du premier ordre et on note son équation homogène. On appelle équation résolvante de , l'équation différentielle linéaire homogène d'ordre 1 l'inconnue étant une application de classe de dans . On appelle application résolvante de l'application définie sur par où est l'unique solution de qui vérifie .  Montrer que pour tout , . En déduire que est inversible et que .  Exprimer les solutions de et celles de en fonction de .  Donner l'expression de dans le cas où l'application est constante.  Montrer que si pour tout , alors   On fixe et on considère l'application . Vérifier que pour tout , et en déduire que est de classe sur avec   On suppose que est bornée et on pose . Montrer que En déduire que pour toute solution de l'équation homogène    Soit . Montrer que l'unique solution de l'équation complète telle que est donnée par la formule de Duhamel :       Pour fixé, la fonction est par définition l'unique solution de qui prend la valeur en . Si on fixe et dans , les fonctions et sont des solutions de et on a . On a donc d'après le théorème de Cauchy-Lipschitz, soit pour tout . En particulier lorsque , on obtient donc est inversible d'inverse .  Fixons . Pour tout , l'unique solution de telle que est donnée par . Pour tout , l'unique solution de telle que est donnée par .  On suppose que est constante. Pour tout , l'unique solution de telle que est donnée par . On a donc Ce qui implique que .  On suppose donc que et commutent pour tout . Posons alors Fixons et considérons la fonction . L'application est dérivable sur et on a  est donc une solution de sur . Notons par ailleurs que . Donc par définition de , on a Ces égalités sont valables pour tout donc .  est l'unique solution de telle que . Soient . On a . Les fonctions et sont donc dérivables et on a    On a   On introduit maintenant la fonction réelle continue définie par Si , on a d'après l'inégalité précédente En posant on a Et donc est décroissante sur . Comme , alors sur . Ainsi et donc Si est une solution de , alors et donc   Les solutions de l'équation homogène s'écrivent sous la forme où est un vecteur quelconque de . La variation des constantes revient donc à faire varier le vecteur . Posons donc . On a alors   Dans cette dernière expression de , on a donc L'unique solution de qui vérifie est donnée par la : c'est la formule de Duhamel . Elle généralise l'expression de la solution du problème de Cauchy d'une équation à coefficients constants donnée dans       Déterminant de l'application résolvante  On reprend les notations de l'exercice précédent.  Montrer que   On suppose que et que l'application est intégrable sur . Montrer qu'il existe tel que        Fixons . Soit la base qu'on a fixée dans . Les fonctions sont des solutions de et leur wronksien est L'équation du wronksien donne ainsi Il existe donc un scalaire qui dépend de qu'on va noter tel que Mais comme , alors et ainsi   La trace est une forme linéaire continue de donc il existe une constante telle que On a donc Ce qui montre que l'application est intégrable sur . Posons alors Soit un réel . Il existe un réel tel que et donc Ce qui implique que pour tout en dehors du compact , on a Sur le compact , l'application continue est bornée et atteint ses bornes. Comme elle ne s'annule pas sur , alors sa borne inférieure est strictement positive. D'où l'existence d'un réel tel que        cas où est un endomorphisme antisymétrique  On suppose que est un espace euclidien. On considère une équation différentielle linéaire homogène On suppose que pour tout , est un endomorphisme antisymétrique.  Montrer que si est une solution de , alors est constante.  Soit une solution sur de l'équation résolvante de : Montrer que s'il existe tel que soit inversible, alors pour tout , est une isométrie de .       Soit une solution de sur . La fonction est alors de classe sur et on a Donc est constante sur . Ce qui implique que la fonction est constante sur .  Posons pour tout , . La fonction est dérivable et Donc est une solution de . Soit maintenant une base de . Pour tout , on a et comme est inversible, alors est une base de . La famille est donc un système fondamental de solutions de . La famille est ainsi une base de pour tout . Ce qui implique que est inversible pour tout . Par ailleurs, pour tout fixé, il est immédiat que la fonction est une solution de . Donc pour tout , la fonction est une solution de . La fonction est donc constante. Pour , elle prend la valeur donc Ceci pour tout . Alors est une isométrie de pour tous .       Solutions périodiques d'un système différentiel périodique   Soient des applications continues et . On suppose que et sont -périodiques. On considère le système différentiel   et note son système homogène.    Soit une fonction réelle continue -périodique. Donner une cns pour que l' edls  admette des solutions -périodiques non nulle.    Soit une solution du système . Montrer que est -périodique si et seulement si .    On suppose que l'application est constante.    Montrer que admet une solution -périodique si et seulement si admet au moins une VAP  .    On suppose que est -périodique. Soit une solution de . Montrer que est -périodique si et seulement si   Montrer que si n'admet aucune solution périodique alors admet une unique solution -périodique.      On note l'application résolvante de . Montrer que     Montrer que admet une solution -périodique non nulle si et seulement si est une VAP de la matrice .    Soit . Montrer que admet une solution -périodique non nulle si et seulement si admet une VAP  telle que .    Montrer que si admet au moins une VAP  telle que et alors admet au moins une solution -périodique non constante.    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.        Les solutions de l'équation différentielle sont les fonctions où est une primitive de . Si alors est -périodique si et seulement si pour tout , , ce qui équivaut à   Puisque est -périodique, ceci équivaut à  Avec , l'équation n'aurait par exemple aucune solution -périodique non nulle bien que est -périodique.    Si est -périodique alors .  Réciproquement supposons que et considérons . Pour tout on a   donc est une solution de . En outre on a donc selon le théorème de Cauchy-Lipschitz, . Ce qui signifie que est -périodique.      Soit une solution non nulle de . On a alors pour tout . La fonction constante est -périodique donc selon la question précédente est -périodique si et seulement si . Ce qui équivaut à   Comme est non nulle alors et donc est -périodique si et seulement si est une VAP de et .  D'après l'exercice , les VAP de sont les nombres de la forme où est une VAP de donc est une VAP de si et seulement s'il existe tel que . Ce qui équivaut à .    est une solution de l'équation complète. Son expression intégrale est   Elle est -périodique si et seulement si , ce qui équivaut à   Supposons que n'a aucune solution périodique. Selon la question précédente n'est pas une VAP de et donc de son inverse . La matrice est alors inversible et il existe donc un vecteur unique tel que   L'unique solution de qui est alors -périodique est celle qui vérifie la condition initiale .  Si admet des solutions -périodiques alors est une VAP de . L'existence de vecteurs qui vérifient dépend alors de la condition   Si cette condition se réalise alors une solution de sera -périodique si et seulement si   où est une solution quelconque de l'équation .      Considérons l'équation résolvante de :   et rappelons que pour un fixé la fonction est l'unique solution de qui vérifie .  Fixons maintenant et considérons la fonction .   Donc est une solution de et elle vérifie . Alors par définition de   ceci pour tout .  Ensuite pour tout , on a selon les résultats de l'exercice et la relation précédente   est donc semblable à .    Considérons une solution non nulle de . Alors pour tout on a . est -périodique si et seulement si ou encore   Sachant que , ceci équivaut à ce que soit une VAP de et que . Ainsi admet des solutions non nulles -périodiques si et seulement si est une VAP de et dans ce cas ces solutions sont les fonctions où .    est -périodique donc elle est -périodique. La question précédente implique que admet une solution -périodique non nulle si et seulement si est une VAP de . En s'appuyant sur les propriétés de on s'aperçoit par ailleurs que pour tout   Et donc pour tout . D'après l'exercice  est donc une VAP de si et seulement s'il existe une VAP  de telle que . Dans ce cas ces solutions sont les fonctions où est un vecteur non nul quelconque de .    Soit . Puisque alors la fonction est une solution -périodique non nulle de . Supposons qu'elle est constante. On aura alors . Le vecteur serait donc associé à , ce qui est contradictoire puisqu'on a supposé que .    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.      Équations différentielles linéaires scalaires à coefficients constants  Dans cet exercice, on résume les connaissances de base sur la résolution d'une équation différentielle linéaire scalaire à coefficients constants.  Soit . On note l'opérateur de dérivation de et pour tout , l'endomorphisme de défini par   On considère dans la suite un polynôme non constant .    Montrer que pour tout ,     Montrer que pour tous et ,     Décrire les solutions de l'EDLS :     Soit . Montrer que induit un endomorphisme inversible sur si et seulement si .    Soient et . Montrer que l'EDLS   admet une solution unique de la forme où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ). Décrire les solutions de .      Solutions DSE d'une EDLS normalisable   On considère une EDLS normalisée d'ordre  et on suppose que et sont DSE en sur un intervalle : On considère une fonction  DSE en qu'on écrit sous la forme .     Montrer que si est une solution de alors     En injectant l'expression dans l'équation on obtient   Cette relation implique que la suite est entièrement déterminée par ses deux premiers termes et . L'ensemble de ces suites est un -ev de dimension .   De quoi on déduit que       Réciproquement, soit une suite non nulle qui vérifie la relation . On considère et tels que et pour tout . On pose et    Montrer que , pour tout .    Montrer que .    En déduire que a un RC  .      L'existence de tel que et découle du fait que est plue petit que les rayons de convergence des séries entières et .  Ensuite la relation précédente sur les termes implique que pour tout     Une récurrence évidente établit donc que pour tout .  le rôle du terme dans la définition de deviendra claire dans la suite.    Simplifions l'écriture de . Pour tout  C'est l'ajout du terme dans la définition de qui a permis l'obtention d'une relation aussi simple entre et .     La suite est non nulle donc est non nulle, et comme alors pour tout dès que pour un certain . Par suite La série entière a donc un RC qui vaut . Notons le RC de . Comme alors pour tout . Donc .        Montrer que pour tous , il existe une unique solution de  DSE sur telle que et .    En compilant les résultats de la question précédente, on voit que est une solution de sur si et seulement si la suite vérifie la relation .  Reformulons : si les fonctions et sont continues sur un intervalle et sont DSE en sur alors toutes les solutions de sur sont DSE en sur .  La suite elle même est entièrement déterminée par les termes et . Comme et alors pour tout il existe une unique solution de  DSE en telle que et .      Solutions pseudo-DSE d'une EDLS non normalisable   On considère une edls homogène d'ordre 2 de la forme   et on suppose que les fonctions et sont dse en sur un intervalle :   On cherche les solutions de qui se prolongent sur sous la forme   où et qui reste à déterminer. On note le rc de .    Montrer que si induit une solution de sur alors    où est le polynôme donné par .    Réciproquement soit la racine de qui a la plus grande partie réelle. On suppose que la suite vérifie la relation de récurrence .  Montrer que et que induit une solution de sur .    Étudier la possibilité de prolonger en une solution de sur .        Supposons que soit une solution de sur .  est continue sur si , mais Il faudra que pour qu'elle soit deux fois dérivable sur .  On peut dériver terme à terme la somme de la série de fonctions pour les mêmes raisons que pour une série entière, à savoir une cvu sur tout segment de de cette série et de ses séries dérivées.  En remplaçant par dans , on obtient   Maintenant en multipliant par on fait apparaitre la somme d'une série entière nulle. Ces coefficients sont donc tous nuls.   Sachant qu'on a supposé que , on peut donc écrire  Soit est une racine de . Si pour tout alors la suite est bien définie et elle est entièrement déterminée par son premier terme .    Soit la racine de ayant la plus grande partie réelle. Alors pour tout , on ne peut avoir et donc les relations définissent complètement la suite à partir de son premier terme . Il reste à justifier que le rc  de la série entière vérifie . Pour cela, comme dans l'exercice précédent, en prenant et tel que et pour tout , on a   En introduisant maintenant la suite définie par et   On aura pour tout   Ici donc la relation implique que pour tout . Par suite pour tout réel   est unitaire de degré donc et donc   La série entière a donc pour rc  . Comme par construction alors , ceci pour tout . Ainsi .  La fonction est donc bien définie et de classe sur . La suite vérifiant la relation , la fonction induit une solution sur de .  La condition imposée à la racine de n'a servi qu'à assurer que pour tout . Si les deux racines et de sont distinctes et vérifient alors cette dernière condition est remplie à la fois pour et pour . Ce qui permet de déterminer deux solutions linéairement indépendantes de sur .  Si les nombres et sont réels alors le polynôme est à coefficients réels. S'il admet deux racines complexes non réelles et alors est imaginaire pure et ne peut donc être un élément de . En revenant aux équations , on peut observer que si est la suite associée à alors est la suite associée à . On obtient ainsi les deux solutions indépendantes de sur :     Par ailleurs en posant , les relations se traduisent par   La suite est donc unique et on a   La fonction ainsi introduite est de classe sur et vérifie . La fonction est donc deux fois dérivable en si et seulement c'est la cas de la fonction . Ce qui n'est possible que si ou .  ne dépend que de et .      Zéros des solutions d'une EDLS du second ordre   On considère une edls homogène normalisée     Montrer toute solution non nulle de admet au plus un nombre fini de zéros dans tout segment de . En déduire que l'ensemble de ces zéros dans est au plus dénombrable.    On suppose que est une solution non nulle de qui admet au moins deux zéros dans et on considère deux zéros successifs de . Montrer que toute solution de non colinéaire à admet exactement un zéro entre et .    Voir la section pour plus de résulats sur ce thème.      Soit une solution non nulle de et considérons un segment . Supposons que admet une infinité de zéros dans . Il est alors possible de construire une suite injective formée de zéros de dans . Le segment étant un compact, cette suite aurait au moins une suite extraite qui converge. Notons cette sous-suite et sa limite.  On a pour tout et est continue donc . Ensuite, la suite étant injective, au plus un terme peut prendre la valeurs , il existe donc un rang à partir duquel . On a alors   et donc . Pour résumer, est une solution de et il existe tel que et . La fonction nulle étant une solution de qui vérifie aussi ces conditions on a donc . Ce qui contredit l'hypothèse faite sur .  Ce résultat permet de justifier que si est un zéro de alors il existe un segment de tel que pour tout . On dit que les zéros de sont isolés. De plus si admet au moins un zéro , alors il existe un zéro de tel que ne contienne aucun zéro de . On dira que les zéros et de sont successifs.  Ensuite, tout intervalle de peut être écrit comme une réunion dénombrable de segments, donc l'ensemble des zéros de dans est au plus dénombrable.    Soit une solution de non colinéaire à . La famille est donc un sfs de . Son wronksien garde un signe constant sur . Quitte à remplacer par on peut supposer que partout sur . On a alors   Par ailleurs ne s'annule pas sur donc elle y garde un signe constant donc les fonctions et ont des signes contraires dans . Leurs limites respectives en et en sont et donc et ont des signes contraires. Les inégalités montrent alors que . Selon le tvi , admet au moins un zéro dans . Ce zéro ne peut être qu'unique car sinon selon cette même propriété qu'on vient de démontrer, aurait au moins un zéro entre et .  Une conséquence de ce résultat et que si admet une solution non nulle qui admet une infinité de zéros dans alors toutes les solutions de ont une infinité de zéros. Deux solutions non nulles ont les mêmes zéros si elles sont colinéaires, des zéros entrelacés sinon.      Solutions périodiques d'une EDLS du second ordre   Soit une fonction continue -périodique sur . On considère l'équation   Soit le sfs canonique de en . On note son wronksien.    Montrer que .    Montrer que admet au moins une solution -périodique non nulle si et seulement si .    Montrer que admet au moins une solution non nulle telle que si et seulement si .        Puisque l'équation est normale tous ses wronksiens sont constants ( ). Les solutions et sont définies par les conditions et donc leurs wronksien vérifie . Alors .    Soit une solution de . Posons   On considère la fonction . Puisque est -périodique alors est aussi une solution de . Elle est égale à si et seulement si et . Ce qui équivaut à et . Ainsi admet une solution -périodique non nulle si et seulement si le système linéaire d'inconnues et   admet au moins une solution non nulle. Ce qui équivaut à dire que le déterminant de ce système est nul. Comme   alors admet au moins une solution -périodique non nulle si et seulement si . Dans ce cas toute solution de qui vérifie et où est une solution de est -péridodique.  Pour faire le lien avec les résultats déjà démontrés en exercice concernant les solutions périodique d'un système différentiel linéaire du premier ordre observons que :    La condition donnée équivaut à ce que soit une VAP de la matrice    Si alors l'application est l'unique solution de l' edl  telle que .      Une solution non nulle de vérifiera si et seulement si et . En posant , ces conditions équivalent à   Ce qui équivaut cette fois à .      "
},
{
  "id": "lemme-de-gronwall",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#lemme-de-gronwall",
  "type": "Exercice",
  "number": "1.4.1",
  "title": "Lemme de Gronwall.",
  "body": " Lemme de Gronwall  Soit un intervalle de . On fixe un point de .  Version réelle   Soit une application continue positive . On suppose qu'il existe continue positive et tels que Montrer que    On introduit la fonction définie sur par  est de classe et on a Si , la fonction étant positive, on a et donc . La fonction est donc décroissante sur l'intervalle . Ce qui conduit à pour tout et ainsi Soit    Version vectorielle   On considère une fonction continue . On suppose qu'il existe continue et tels que Montrer que    Il suffit d'appliquer le résultat précédent aux fonctions continues positives et en remarquant que    Application   Utiliser ce résultat pour montrer l'unicité de la solution d'un problème de Cauchy relatif à une EDL du premier ordre.    Voir exercices d'approfondissement    "
},
{
  "id": "expression-solutions-commutatives",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#expression-solutions-commutatives",
  "type": "Exercice",
  "number": "1.4.2",
  "title": "Expression des solutions quand <span class=\"process-math\">\\(a(t) \\circ a(s) = a(s) \\circ a(t)\\)<\/span>.",
  "body": " Expression des solutions quand    On considère une EDL du premier ordre homogène et on suppose que pour tous . On fixe . Montrer que les solutions de sont les fonctions où est un vecteur quelconque de . Quel est l'unique solution de telle que lorsque est donnée ?    Soit et considérons les fonctions  est dérivable de dérivée et on a pour tout  Un résultat usuel affirme que dans ce cas, l'application est dérivable de dérivée . Ensuite, cela implique que la fonction est dérivable et que La fonction est donc une solution de . C'est l'unique solution de qui vérifie . Le vecteur étant quelconque dans , cela prouve que toutes les solutions de sont de la forme de .      Résoudre sur le système différentiel lorsque    La condition est bien vérifiée et on a et ensuite Alors les solutions du système différentiel sont les fonctions    "
},
{
  "id": "solutions-bornees",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#solutions-bornees",
  "type": "Exercice",
  "number": "1.4.3",
  "title": "Solutions bornées d’une équation différentielle linéaire à coefficients constants.",
  "body": " Solutions bornées d'une équation différentielle linéaire à coefficients constants   Soit .     Montrer que l'application est bornée sur si et seulement si        Considérons une formule de trigonalisation où où sont les valeurs propres distinctes de , leurs multiplicités respectives et des matrices nilpotentes. Alors avec L'application est donc bornée sur si et seulement si toutes les applications le sont. Or si et est une matrice nilpotente d'indice de nilpotence , alors Puisque , alors la fonction est bornée sur si et seulement si ( et ) ou ( et ). On en déduit que la fonction est bornée si et seulement si Et finalement, l'application est bornée si et seulement si sachant que la condition équivaut à ou encore que le sous-espace propre de en est égal à son sous-espace caractéristique.      Quelles sont les solutions du système différentiel qui sont bornées ?    Soit et considérons la solution . Décomposons sous la forme où pour tout , . On peut poser pour tout  où . On a alors pour tout , et donc est bornée si et seulement si les fonctions sont toutes bornées.  Si , alors la matrice est bornée et donc est bornée.  Si , on introduit l'entier . On peut alors écrire La fonction est bornée si et seulement si les fonctions sont bornées. Alors ne peut être bornée que si , c'est-à-dire si ou encore .  Si , alors n'est pas bornée et donc ne peut être bornée que si ou encore .  Ainsi, la solution de est bornée si et seulement si où et .    "
},
{
  "id": "spectral-mapping-theorem",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#spectral-mapping-theorem",
  "type": "Exercice",
  "number": "1.4.4",
  "title": "Théorème de l’application spectrale.",
  "body": " Théorème de l'application spectrale   Soit une série entière de rayon de convergence infini. On note sa somme sur .   Montrer que pour toute matrice , la série converge. On note également sa somme.  Montrer que .  Soit une valeur propre de . On suppose que pour toute valeur propre de telle que . Montrer que   On suppose que induit une injection sur . Soit .   Montrer que les valeurs propres de et de ont la même multiplicité.  Montrer que si , alors         Pour tout , on a . Puisque la série entière a un rayon de convergence infini, la série converge et donc la série converge absolument.  Écrivons une formule de trigonalisation de : où chaque bloc étant triangulaire supérieure avec une même valeur propre de sur sa diagonale. On peut alors justifier que avec et est triangulaire supérieure d'éléments diagonaux tous égaux à . Ainsi,   Posons Soit une valeur propre de telle que . On a alors pour tout  Ainsi, . Par suite, . La réciproque nécessite le recours à la réduction de Jordan. Examinons ce qui se passe avec une cellule de Jordan dans la décomposition de . Pour tout , on peut écrire Avec la convention si . Pour chaque , on a Donc la série est convergente de somme . Par linéarité de la somme d'une série convergente, on a donc Concrètement, est de la forme Ainsi, est triangulaire supérieure stricte et tous les coefficients sur sa deuxième diagonale supérieure valent . Elle est donc échelonnée de rang . Si on écrit maintenant où est la réduite de Jordan de , alors . Soit la liste de toutes les cellules de Jordan de qui correspondent à des valeurs propres de telle que et soit le bloc diagonal qui regroupe toutes les autres cellules et dont la taille sera notée , quitte à réordonner toutes les cellules de , on peut écrire Le bloc est inversible car ne figure pas dans la diagonale de . Donc D'un autre côté, pour chaque valeur propre de , le nombre de cellules de Jordan de relative à est égal à . Ce qui prouve que et ainsi En conclusion,     Reprenons l'expression de donnée précédemment où est la multiplicité de la valeur propre de . Puisque on a supposé que induit une injection sur , alors les nombres sont distincts et donc est une racine de multiplicité de .  On suppose que . Il va falloir passer encore par la réduction de Jordan de la matrice .      "
},
{
  "id": "application-resolvante",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#application-resolvante",
  "type": "Exercice",
  "number": "1.4.5",
  "title": "Application résolvante d’une équation différentielle linéaire.",
  "body": " Application résolvante d'une équation différentielle linéaire  On considère une EDL du premier ordre et on note son équation homogène. On appelle équation résolvante de , l'équation différentielle linéaire homogène d'ordre 1 l'inconnue étant une application de classe de dans . On appelle application résolvante de l'application définie sur par où est l'unique solution de qui vérifie .  Montrer que pour tout , . En déduire que est inversible et que .  Exprimer les solutions de et celles de en fonction de .  Donner l'expression de dans le cas où l'application est constante.  Montrer que si pour tout , alors   On fixe et on considère l'application . Vérifier que pour tout , et en déduire que est de classe sur avec   On suppose que est bornée et on pose . Montrer que En déduire que pour toute solution de l'équation homogène    Soit . Montrer que l'unique solution de l'équation complète telle que est donnée par la formule de Duhamel :       Pour fixé, la fonction est par définition l'unique solution de qui prend la valeur en . Si on fixe et dans , les fonctions et sont des solutions de et on a . On a donc d'après le théorème de Cauchy-Lipschitz, soit pour tout . En particulier lorsque , on obtient donc est inversible d'inverse .  Fixons . Pour tout , l'unique solution de telle que est donnée par . Pour tout , l'unique solution de telle que est donnée par .  On suppose que est constante. Pour tout , l'unique solution de telle que est donnée par . On a donc Ce qui implique que .  On suppose donc que et commutent pour tout . Posons alors Fixons et considérons la fonction . L'application est dérivable sur et on a  est donc une solution de sur . Notons par ailleurs que . Donc par définition de , on a Ces égalités sont valables pour tout donc .  est l'unique solution de telle que . Soient . On a . Les fonctions et sont donc dérivables et on a    On a   On introduit maintenant la fonction réelle continue définie par Si , on a d'après l'inégalité précédente En posant on a Et donc est décroissante sur . Comme , alors sur . Ainsi et donc Si est une solution de , alors et donc   Les solutions de l'équation homogène s'écrivent sous la forme où est un vecteur quelconque de . La variation des constantes revient donc à faire varier le vecteur . Posons donc . On a alors   Dans cette dernière expression de , on a donc L'unique solution de qui vérifie est donnée par la : c'est la formule de Duhamel . Elle généralise l'expression de la solution du problème de Cauchy d'une équation à coefficients constants donnée dans     "
},
{
  "id": "determinant-resolvante",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#determinant-resolvante",
  "type": "Exercice",
  "number": "1.4.6",
  "title": "Déterminant de l’application résolvante.",
  "body": " Déterminant de l'application résolvante  On reprend les notations de l'exercice précédent.  Montrer que   On suppose que et que l'application est intégrable sur . Montrer qu'il existe tel que        Fixons . Soit la base qu'on a fixée dans . Les fonctions sont des solutions de et leur wronksien est L'équation du wronksien donne ainsi Il existe donc un scalaire qui dépend de qu'on va noter tel que Mais comme , alors et ainsi   La trace est une forme linéaire continue de donc il existe une constante telle que On a donc Ce qui montre que l'application est intégrable sur . Posons alors Soit un réel . Il existe un réel tel que et donc Ce qui implique que pour tout en dehors du compact , on a Sur le compact , l'application continue est bornée et atteint ses bornes. Comme elle ne s'annule pas sur , alors sa borne inférieure est strictement positive. D'où l'existence d'un réel tel que      "
},
{
  "id": "a-antisymetrique",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#a-antisymetrique",
  "type": "Exercice",
  "number": "1.4.7",
  "title": "cas où <span class=\"process-math\">\\(a(t)\\)<\/span> est un endomorphisme antisymétrique.",
  "body": " cas où est un endomorphisme antisymétrique  On suppose que est un espace euclidien. On considère une équation différentielle linéaire homogène On suppose que pour tout , est un endomorphisme antisymétrique.  Montrer que si est une solution de , alors est constante.  Soit une solution sur de l'équation résolvante de : Montrer que s'il existe tel que soit inversible, alors pour tout , est une isométrie de .       Soit une solution de sur . La fonction est alors de classe sur et on a Donc est constante sur . Ce qui implique que la fonction est constante sur .  Posons pour tout , . La fonction est dérivable et Donc est une solution de . Soit maintenant une base de . Pour tout , on a et comme est inversible, alors est une base de . La famille est donc un système fondamental de solutions de . La famille est ainsi une base de pour tout . Ce qui implique que est inversible pour tout . Par ailleurs, pour tout fixé, il est immédiat que la fonction est une solution de . Donc pour tout , la fonction est une solution de . La fonction est donc constante. Pour , elle prend la valeur donc Ceci pour tout . Alors est une isométrie de pour tous .     "
},
{
  "id": "sysdiff-solutions-periodiques",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#sysdiff-solutions-periodiques",
  "type": "Exercice",
  "number": "1.4.8",
  "title": "Solutions périodiques d’un système différentiel périodique.",
  "body": " Solutions périodiques d'un système différentiel périodique   Soient des applications continues et . On suppose que et sont -périodiques. On considère le système différentiel   et note son système homogène.    Soit une fonction réelle continue -périodique. Donner une cns pour que l' edls  admette des solutions -périodiques non nulle.    Soit une solution du système . Montrer que est -périodique si et seulement si .    On suppose que l'application est constante.    Montrer que admet une solution -périodique si et seulement si admet au moins une VAP  .    On suppose que est -périodique. Soit une solution de . Montrer que est -périodique si et seulement si   Montrer que si n'admet aucune solution périodique alors admet une unique solution -périodique.      On note l'application résolvante de . Montrer que     Montrer que admet une solution -périodique non nulle si et seulement si est une VAP de la matrice .    Soit . Montrer que admet une solution -périodique non nulle si et seulement si admet une VAP  telle que .    Montrer que si admet au moins une VAP  telle que et alors admet au moins une solution -périodique non constante.    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.        Les solutions de l'équation différentielle sont les fonctions où est une primitive de . Si alors est -périodique si et seulement si pour tout , , ce qui équivaut à   Puisque est -périodique, ceci équivaut à  Avec , l'équation n'aurait par exemple aucune solution -périodique non nulle bien que est -périodique.    Si est -périodique alors .  Réciproquement supposons que et considérons . Pour tout on a   donc est une solution de . En outre on a donc selon le théorème de Cauchy-Lipschitz, . Ce qui signifie que est -périodique.      Soit une solution non nulle de . On a alors pour tout . La fonction constante est -périodique donc selon la question précédente est -périodique si et seulement si . Ce qui équivaut à   Comme est non nulle alors et donc est -périodique si et seulement si est une VAP de et .  D'après l'exercice , les VAP de sont les nombres de la forme où est une VAP de donc est une VAP de si et seulement s'il existe tel que . Ce qui équivaut à .    est une solution de l'équation complète. Son expression intégrale est   Elle est -périodique si et seulement si , ce qui équivaut à   Supposons que n'a aucune solution périodique. Selon la question précédente n'est pas une VAP de et donc de son inverse . La matrice est alors inversible et il existe donc un vecteur unique tel que   L'unique solution de qui est alors -périodique est celle qui vérifie la condition initiale .  Si admet des solutions -périodiques alors est une VAP de . L'existence de vecteurs qui vérifient dépend alors de la condition   Si cette condition se réalise alors une solution de sera -périodique si et seulement si   où est une solution quelconque de l'équation .      Considérons l'équation résolvante de :   et rappelons que pour un fixé la fonction est l'unique solution de qui vérifie .  Fixons maintenant et considérons la fonction .   Donc est une solution de et elle vérifie . Alors par définition de   ceci pour tout .  Ensuite pour tout , on a selon les résultats de l'exercice et la relation précédente   est donc semblable à .    Considérons une solution non nulle de . Alors pour tout on a . est -périodique si et seulement si ou encore   Sachant que , ceci équivaut à ce que soit une VAP de et que . Ainsi admet des solutions non nulles -périodiques si et seulement si est une VAP de et dans ce cas ces solutions sont les fonctions où .    est -périodique donc elle est -périodique. La question précédente implique que admet une solution -périodique non nulle si et seulement si est une VAP de . En s'appuyant sur les propriétés de on s'aperçoit par ailleurs que pour tout   Et donc pour tout . D'après l'exercice  est donc une VAP de si et seulement s'il existe une VAP  de telle que . Dans ce cas ces solutions sont les fonctions où est un vecteur non nul quelconque de .    Soit . Puisque alors la fonction est une solution -périodique non nulle de . Supposons qu'elle est constante. On aura alors . Le vecteur serait donc associé à , ce qui est contradictoire puisqu'on a supposé que .    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.     "
},
{
  "id": "sec-eqdiff-exercices-approfondissement-10",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#sec-eqdiff-exercices-approfondissement-10",
  "type": "Exercice",
  "number": "1.4.9",
  "title": "Équations différentielles linéaires scalaires à coefficients constants.",
  "body": "Équations différentielles linéaires scalaires à coefficients constants  Dans cet exercice, on résume les connaissances de base sur la résolution d'une équation différentielle linéaire scalaire à coefficients constants.  Soit . On note l'opérateur de dérivation de et pour tout , l'endomorphisme de défini par   On considère dans la suite un polynôme non constant .    Montrer que pour tout ,     Montrer que pour tous et ,     Décrire les solutions de l'EDLS :     Soit . Montrer que induit un endomorphisme inversible sur si et seulement si .    Soient et . Montrer que l'EDLS   admet une solution unique de la forme où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ). Décrire les solutions de .    "
},
{
  "id": "act-eqdse",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#act-eqdse",
  "type": "Exercice",
  "number": "1.4.10",
  "title": "Solutions DSE d’une EDLS normalisable.",
  "body": " Solutions DSE d'une EDLS normalisable   On considère une EDLS normalisée d'ordre  et on suppose que et sont DSE en sur un intervalle : On considère une fonction  DSE en qu'on écrit sous la forme .     Montrer que si est une solution de alors     En injectant l'expression dans l'équation on obtient   Cette relation implique que la suite est entièrement déterminée par ses deux premiers termes et . L'ensemble de ces suites est un -ev de dimension .   De quoi on déduit que       Réciproquement, soit une suite non nulle qui vérifie la relation . On considère et tels que et pour tout . On pose et    Montrer que , pour tout .    Montrer que .    En déduire que a un RC  .      L'existence de tel que et découle du fait que est plue petit que les rayons de convergence des séries entières et .  Ensuite la relation précédente sur les termes implique que pour tout     Une récurrence évidente établit donc que pour tout .  le rôle du terme dans la définition de deviendra claire dans la suite.    Simplifions l'écriture de . Pour tout  C'est l'ajout du terme dans la définition de qui a permis l'obtention d'une relation aussi simple entre et .     La suite est non nulle donc est non nulle, et comme alors pour tout dès que pour un certain . Par suite La série entière a donc un RC qui vaut . Notons le RC de . Comme alors pour tout . Donc .        Montrer que pour tous , il existe une unique solution de  DSE sur telle que et .    En compilant les résultats de la question précédente, on voit que est une solution de sur si et seulement si la suite vérifie la relation .  Reformulons : si les fonctions et sont continues sur un intervalle et sont DSE en sur alors toutes les solutions de sur sont DSE en sur .  La suite elle même est entièrement déterminée par les termes et . Comme et alors pour tout il existe une unique solution de  DSE en telle que et .    "
},
{
  "id": "act-eqdsen",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#act-eqdsen",
  "type": "Exercice",
  "number": "1.4.11",
  "title": "Solutions pseudo-DSE d’une EDLS non normalisable.",
  "body": " Solutions pseudo-DSE d'une EDLS non normalisable   On considère une edls homogène d'ordre 2 de la forme   et on suppose que les fonctions et sont dse en sur un intervalle :   On cherche les solutions de qui se prolongent sur sous la forme   où et qui reste à déterminer. On note le rc de .    Montrer que si induit une solution de sur alors    où est le polynôme donné par .    Réciproquement soit la racine de qui a la plus grande partie réelle. On suppose que la suite vérifie la relation de récurrence .  Montrer que et que induit une solution de sur .    Étudier la possibilité de prolonger en une solution de sur .        Supposons que soit une solution de sur .  est continue sur si , mais Il faudra que pour qu'elle soit deux fois dérivable sur .  On peut dériver terme à terme la somme de la série de fonctions pour les mêmes raisons que pour une série entière, à savoir une cvu sur tout segment de de cette série et de ses séries dérivées.  En remplaçant par dans , on obtient   Maintenant en multipliant par on fait apparaitre la somme d'une série entière nulle. Ces coefficients sont donc tous nuls.   Sachant qu'on a supposé que , on peut donc écrire  Soit est une racine de . Si pour tout alors la suite est bien définie et elle est entièrement déterminée par son premier terme .    Soit la racine de ayant la plus grande partie réelle. Alors pour tout , on ne peut avoir et donc les relations définissent complètement la suite à partir de son premier terme . Il reste à justifier que le rc  de la série entière vérifie . Pour cela, comme dans l'exercice précédent, en prenant et tel que et pour tout , on a   En introduisant maintenant la suite définie par et   On aura pour tout   Ici donc la relation implique que pour tout . Par suite pour tout réel   est unitaire de degré donc et donc   La série entière a donc pour rc  . Comme par construction alors , ceci pour tout . Ainsi .  La fonction est donc bien définie et de classe sur . La suite vérifiant la relation , la fonction induit une solution sur de .  La condition imposée à la racine de n'a servi qu'à assurer que pour tout . Si les deux racines et de sont distinctes et vérifient alors cette dernière condition est remplie à la fois pour et pour . Ce qui permet de déterminer deux solutions linéairement indépendantes de sur .  Si les nombres et sont réels alors le polynôme est à coefficients réels. S'il admet deux racines complexes non réelles et alors est imaginaire pure et ne peut donc être un élément de . En revenant aux équations , on peut observer que si est la suite associée à alors est la suite associée à . On obtient ainsi les deux solutions indépendantes de sur :     Par ailleurs en posant , les relations se traduisent par   La suite est donc unique et on a   La fonction ainsi introduite est de classe sur et vérifie . La fonction est donc deux fois dérivable en si et seulement c'est la cas de la fonction . Ce qui n'est possible que si ou .  ne dépend que de et .     "
},
{
  "id": "sec-eqdiff-exercices-approfondissement-13",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#sec-eqdiff-exercices-approfondissement-13",
  "type": "Exercice",
  "number": "1.4.12",
  "title": "Zéros des solutions d’une EDLS du second ordre.",
  "body": "Zéros des solutions d'une EDLS du second ordre   On considère une edls homogène normalisée     Montrer toute solution non nulle de admet au plus un nombre fini de zéros dans tout segment de . En déduire que l'ensemble de ces zéros dans est au plus dénombrable.    On suppose que est une solution non nulle de qui admet au moins deux zéros dans et on considère deux zéros successifs de . Montrer que toute solution de non colinéaire à admet exactement un zéro entre et .    Voir la section pour plus de résulats sur ce thème.      Soit une solution non nulle de et considérons un segment . Supposons que admet une infinité de zéros dans . Il est alors possible de construire une suite injective formée de zéros de dans . Le segment étant un compact, cette suite aurait au moins une suite extraite qui converge. Notons cette sous-suite et sa limite.  On a pour tout et est continue donc . Ensuite, la suite étant injective, au plus un terme peut prendre la valeurs , il existe donc un rang à partir duquel . On a alors   et donc . Pour résumer, est une solution de et il existe tel que et . La fonction nulle étant une solution de qui vérifie aussi ces conditions on a donc . Ce qui contredit l'hypothèse faite sur .  Ce résultat permet de justifier que si est un zéro de alors il existe un segment de tel que pour tout . On dit que les zéros de sont isolés. De plus si admet au moins un zéro , alors il existe un zéro de tel que ne contienne aucun zéro de . On dira que les zéros et de sont successifs.  Ensuite, tout intervalle de peut être écrit comme une réunion dénombrable de segments, donc l'ensemble des zéros de dans est au plus dénombrable.    Soit une solution de non colinéaire à . La famille est donc un sfs de . Son wronksien garde un signe constant sur . Quitte à remplacer par on peut supposer que partout sur . On a alors   Par ailleurs ne s'annule pas sur donc elle y garde un signe constant donc les fonctions et ont des signes contraires dans . Leurs limites respectives en et en sont et donc et ont des signes contraires. Les inégalités montrent alors que . Selon le tvi , admet au moins un zéro dans . Ce zéro ne peut être qu'unique car sinon selon cette même propriété qu'on vient de démontrer, aurait au moins un zéro entre et .  Une conséquence de ce résultat et que si admet une solution non nulle qui admet une infinité de zéros dans alors toutes les solutions de ont une infinité de zéros. Deux solutions non nulles ont les mêmes zéros si elles sont colinéaires, des zéros entrelacés sinon.     "
},
{
  "id": "solutions-periodiques-scalar-2nd",
  "level": "2",
  "url": "sec-eqdiff-exercices-approfondissement.html#solutions-periodiques-scalar-2nd",
  "type": "Exercice",
  "number": "1.4.13",
  "title": "Solutions périodiques d’une EDLS du second ordre.",
  "body": "Solutions périodiques d'une EDLS du second ordre   Soit une fonction continue -périodique sur . On considère l'équation   Soit le sfs canonique de en . On note son wronksien.    Montrer que .    Montrer que admet au moins une solution -périodique non nulle si et seulement si .    Montrer que admet au moins une solution non nulle telle que si et seulement si .        Puisque l'équation est normale tous ses wronksiens sont constants ( ). Les solutions et sont définies par les conditions et donc leurs wronksien vérifie . Alors .    Soit une solution de . Posons   On considère la fonction . Puisque est -périodique alors est aussi une solution de . Elle est égale à si et seulement si et . Ce qui équivaut à et . Ainsi admet une solution -périodique non nulle si et seulement si le système linéaire d'inconnues et   admet au moins une solution non nulle. Ce qui équivaut à dire que le déterminant de ce système est nul. Comme   alors admet au moins une solution -périodique non nulle si et seulement si . Dans ce cas toute solution de qui vérifie et où est une solution de est -péridodique.  Pour faire le lien avec les résultats déjà démontrés en exercice concernant les solutions périodique d'un système différentiel linéaire du premier ordre observons que :    La condition donnée équivaut à ce que soit une VAP de la matrice    Si alors l'application est l'unique solution de l' edl  telle que .      Une solution non nulle de vérifiera si et seulement si et . En posant , ces conditions équivalent à   Ce qui équivaut cette fois à .     "
},
{
  "id": "sec-eqdiff-exercices-entrainement",
  "level": "1",
  "url": "sec-eqdiff-exercices-entrainement.html",
  "type": "Exercices",
  "number": "1.5",
  "title": "Exercices d’entraînement",
  "body": " Exercices d'entraînement     Déterminer les solutions développables en série entière de l'équation différentielle      Déterminer les solutions développables en série entière de l'équation différentielle .    Soit une suite réelle pour laquelle le rayon de convergence de la série entière est strictement positif. On note la somme de cette série entière sur . C’est une fonction indéfiniment dérivable et est solution, sur , de l’équation si et seulement si    et par unicité du développement en série entière cela équivaut à ce que pour tout , .  Conclusion est solution, sur , de l’équation si et seulement si pour tout , . Il reste à constater que le rayon de convergence de la série entière ainsi obtenue est égal à car .      On note la solution DSE qui vérifie et on pose   Étudier le sens de variation de et en déduire que possède une limite finie en .    On a donc, pour tout réel , .  La fonction est évidemment dérivable sur et pour tout réel ,   de sorte que est décroissante sur .  Comme elle est minorée par 0 sur , elle possède une limite finie en .      En déduire que est bornée sur et que .    Pour tout réel , ,  on peut en déduire que est bornée sur . De même,   donc .       zéros d’une solution d’une équation différentielle linéaire homogène du second ordre.   Soient intervalle de et . On considère l’équation   Soit une solution sur réelle et non identiquement nulle de .     On suppose qu’il existe deux réels tels que et . Démontrer que l’ensemble   est un ensemble fini.    Supposons au contraire que soit infini : il contient alors une suite formée de réels deux à deux distincts. Quitte à extraire une sous-suite convenable on peut supposer que converge vers .  En tenant compte de la continuité de , on voit que . De plus, par application du théorème de Rolle, pour tout , il existe tel que .  On en déduit que converge vers , puis par continuité de , on obtient .  Conclusion comme , le théorème de Cauchy-Lipschitz montre que est identiquement nulle sur , ce qui a été exclu. L’ensemble est donc fini.      En déduire que l’ensemble des zéros de est un ensemble au plus dénombrable.    On peut écrire comme l’union d’une suite de segments.  D’après la question précédente, l’ensemble est fini, par conséquent l’ensemble des zéros de est fini ou dénombrable.        Soient un réel strictement positif, telle que pour tout réel , . On considère l’équation différentielle   Soit une solution non identiquement nulle de .     Expliquer pourquoi on aura pour tout réel , .    D’après le théorème de Cauchy-Lipschitz, comme n’est pas identiquement nulle, pour tout réel , .      On admet qu’il existe alors deux fonctions et toutes deux de classe et telles que    Exprimer en fonction de et de .  En déduire que est une bijection de sur .  Conclure que possède une infinité de zéros.     On a donc et  d’où ,  de plus, ,  d’où le système d’équations   En résolvant à l’aide des formules de Cramer    Or , donc et de plus la fonction   est continue, -périodique et strictement positive.  On en déduit que .  Conclusion , donc est une bijection décroissante de sur .  De plus, pour tout réel ,   donc et donc .  Pour tout entier tel que , il existe un unique réel tel que . On a alors .  Conclusion possède une infinité de zéros dans .        Soient et tels que   Démontrer que toute solution de l’équation est bornée au voisinage de .  Indication : considérer la fonction .  Démontrer que toute solution de l’équation est bornée au voisinage de .    Comme indiqué, on considère la fonction .  Elle est de classe sur et   On en déduit que sur , donc est décroissante sur cet intervalle. Conclusion est majorée par sur donc est majorée par sur .       Soit une fonction continue et une fonction de classe telle que   On suppose qu’il existe deux réels tels que . Démontrer que .  Indication : si n’est pas la fonction nulle, on utilisera l’exercice 7.2 p. 458 pour se ramener au cas où ne s’annule pas sur .  Démontrer que .    Si n’est pas identiquement nulle, l’exercice 7.2 montre que l’on peut se ramener au cas où s’annule en , en et où ne s’annule pas sur . De plus, grâce au théorème des valeurs intermédiaires, est de signe constant sur et quitte à changer en son opposée, on peut supposer sur . En notant une primitive de et en multipliant (1) par , on obtient   puis en intégrant entre et ,   Enfin, et même (car si , il résulte du théorème de Cauchy-Lipschitz que l’on aurait sur , ce qui n’est pas le cas). De même, .  Conclusion alors que , d’où une contradiction. On en déduit que est identiquement nulle sur . En particulier , donc est identiquement nulle sur .       Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .     Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .        Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soient et      Soit telle que et . Démontrer que et sont strictement positives sur et que .    Supposons que s’annule au moins une fois sur .  L’ensemble est alors une partie fermée non vide de , elle possède donc un plus petit élément et . De plus, d’après le théorème des valeurs intermédiaires, est strictement positive sur , donc est positive sur cet intervalle et donc est convexe. On en déduit alors que pour tout ,   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .      Soient telles que    Calculer . Démontrer que sur , et sont monotones de monotonies opposées.  Démontrer que et tendent vers la même limite en .     Posons . Il s’agit d’une fonction de classe et   W est donc constante. De plus, .  Par ailleurs, comme et , la fonction est strictement positive au voisinage de à droite et en reprenant la raisonnement de la question 1), on montre que est strictement positive sur et tend vers en . On en déduit également que est strictement positive et croissante sur cet intervalle. On a alors, sur ,    Conclusion est strictement décroissante sur et est croissante sur cet intervalle.  Écrivons   car pour , et .  Sur , étant croissante et , on en déduit que sur .  De plus, pour , donc la fonction décroissante sur , est minorée par 0 donc converge vers une limite finie en .  Et, bien sûr,       Démontrer qu’il existe une unique telle que soit strictement positive, décroissante sur et telle que .    Le couple est un système fondamental de solutions sur de (car leur wronskien ne s’annule pas). Toute solution de est donc de la forme , où et sont des réels. La condition revient à imposer .  Le fait que soit décroissante et minorée par 0 sur impose à d’être bornée.  Écrivons sur ,   on en déduit que si , on aurait donc aurait une limite infinie en , absurde. Donc, nécessairement, .  Ce qui prouve l’unicité de , cette fonction ne peut s’écrire que sous la forme .  Montrons que cette fonction est bien décroissante et positive.  Sur , car sur , et est strictement décroissante de limite .  Toujours sur , on a car sur , et est strictement croissante de limite .  Conclusion Il existe une unique telle que soit strictement positive, décroissante sur et telle que , c’est .       Théorème de relèvement pour les fonctions de classe .   Soient un intervalle de , , , telles que . On considère également un réel tel que   ainsi que la fonction   Démontrer que pour tout réel ,   Démontrer que pour tout réel ,     La fonction   est de classe sur car est continue sur cet intervalle. De plus, . Afin de conclure, on introduit la fonction   Elle est évidemment de classe sur et   Or , donc par dérivation et donc   Conclusion est constante sur égale à , par conséquent .      Théorème de Sturm   Soient un intervalle non trivial de , deux fonctions continues telles que . On considère également deux fonctions non identiquement nulles, de classe telles que   Enfin, et désignent deux zéros consécutifs de .     Démontrer que s’annule au moins une fois dans ou que .    Comme ne s’annule pas sur , elle y est de signe constant et quitte à la changer en son opposée on peut supposer qu’elle est strictement positive sur . Supposons que ne s’annule pas dans . Elle y est donc de signe constant et ici aussi, quitte à changer en son opposée, on peut supposer sur .  Considérons alors le wronskien du couple , .  Il s’agit là d’une fonction de classe sur et   Ainsi, est décroissante sur .  Or et .  De même et .  Conclusion   On a donc sur .  En particulier et .      Dans le cas où ne s’annule pas dans , démontrer que est proportionnelle à sur le segment .    Supposons que . En reprenant les précédents calculs, on voit que l’on a toujours décroissante sur avec est nulle sur .  On en déduit que sur ,   Il existe donc tel que sur . Cette relation est encore vraie en et en .        Une application de  Soit une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .  Démontrer que l’ensemble des zéros de est infini dénombrable.    On sait (voir exercice 7.2) que possède un nombre fini de zéros dans tout segment.  Comme est l’union d’une famille dénombrable de segments, l’ensemble est l’union dénombrable d’ensembles finis, il est donc au plus dénombrable.  Il reste à voir que est infini. Supposons au contraire que soit fini.  Dans ce cas, il existe un réel pour lequel ne s’annule pas sur .  On peut supposer (par application du théorème des valeurs intermédiaires) que est strictement positive sur .  Il s’ensuit que sur , de sorte que est concave sur .  On en déduit que pour ,   Si , alors tendrait vers en , ce qui n’est pas possible.  En définitive, est positive sur , donc est croissante sur .  On en déduit que pour tout ,   L’inégalité des accroissements finis montre que .  Une nouvelle application de l’inégalité des accroissements finis permet de conclure que , d’où une contradiction puis que par hypothèse sur .  Conclusion est un ensemble infini dénombrable.       Une application de  Soit une fonction continue, -périodique ( ).  On considère une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .  On note l’ensemble des zéros de .  Démontrer que ou bien ou bien est infini.  Indication : si et sont deux zéros consécutifs de , démontrer que s’annule dans tout segment de la forme , où .    Supposons que possède au moins deux zéros . En utilisant la conclusion de l’exercice 7.2, on se ramène au cas où et sont deux zéros consécutifs de .  Dans ce cas (théorème des valeurs intermédiaires), est de signe constant sur et quitte à changer en son opposé, on peut supposer que est strictement positive sur . Pour tout entier , on note   Comme la fonction est -périodique, est solution, sur , de l’équation .  On utilise alors les conclusions de l’exercice 7.9 avec ici .  La fonction s’annule au moins une fois dans ou alors .  Dans les deux cas, on a répondu à la question. Considérons alors un entier tel que . On vérifie que pour , les segments sont deux à deux disjoints car   Conclusion si , alors est infini.     Le lemme de Gronwall.    Soient et un réel positif tels que   Démontrer que pour tout ,   Démontrer que pour tout ,     Supposons d’abord et considérons la fonction   Cette fonction est de classe et pour tout ,   d’où, par intégration   d’où   Supposons à présent que . Dans ce cas, on peut appliquer tout ce qui précède pour tout ,   d’où le résultat cherché en faisant tendre vers 0.     Un problème de conditions aux limites.    Soient . On suppose que . On s’intéresse à l’équation différentielle   où la fonction inconnue est supposée à valeurs réelles.  Soit une solution de l’équation homogène associée vérifiant . En considérant , démontrer que est constante, égale à zéro sur .    On considère comme c’est indiqué dans l’énoncé . Ce nombre est clairement négatif. Par ailleurs, en tenant compte du fait que ,   Conclusion et comme est positive et continue, on peut conclure que sur , donc est constante et nécessairement nulle vu que .       Soit une fonction de classe telle que . Démontrer que les solutions sur de l’équation   sont toutes bornées ainsi que leurs dérivées d’ordre 1. Indication : on pourra considérer la fonction puis utiliser le lemme de Gronwall (exercice 7.12).  Démontrer que les solutions sur de l’équation sont toutes bornées ainsi que leurs dérivées d’ordre 1.    Soit une solution sur de l’équation . On lui associe la fonction . Cette fonction est de classe et . Ainsi, pour tout réel ,    d’où, pour les mêmes valeurs de ,   Le lemme de Gronwall permet alors de conclure que   Conclusion est bornée sur et il en est donc de même de et de .       Soient un intervalle ouvert de , . On considère l’équation différentielle   On suppose connu le fait que les zéros de toute solution sur non identiquement nulle de sont isolés.     Soient . On suppose que et possèdent un zéro commun. Démontrer alors que ces deux fonctions sont proportionnelles.    Supposons qu’il existe tel que . Comme et sont des solutions non identiquement nulles de , et ne sont pas nuls. On considère alors . C’est une solution sur de qui est telle que et . On en déduit que est la fonction nulle, par conséquent et sont proportionnelles.      Soit un système fondamental de solutions sur de . Démontrer qu’entre deux zéros consécutifs de il y a exactement un zéro de .    Soient un système fondamental de solutions sur de et deux zéros consécutifs de . Quitte à changer en , on peut supposer grâce au théorème des valeurs intermédiaires que est strictement positive sur .  Supposons à présent que ne s’annule pas sur . À nouveau, on peut supposer sur . Comme et sont linéairement indépendantes, il résulte de la question 1) que ne s’annule ni en ni en . Ainsi et .  Par ailleurs si on note le wronskien du couple , .  On a et même (car sinon on aurait , ce qui entraînerait ). De même . Ainsi   ce qui entraînerait via le théorème des valeurs intermédiaires l’existence d’un zéro pour dans . Ceci est impossible vu que est un système fondamental de solutions sur de .  Conclusion entre et , s’annule au moins une fois. De plus elle ne peut s’annuler deux fois sans quoi le précédent raisonnement appliqué au couple démontrerait l’existence pour d’un zéro strictement compris entre et .        Soient et   (où la fonction inconnue est à valeurs dans ).  Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .  Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .    On note une norme sur .  Supposons que toutes les solutions sur de sont bornées. Soient et un vecteur propre associé. On sait alors que l’application est une solution sur de . De plus, pour tout réel ,   Comme est bornée sur , cela impose .  Conclusion .  Considérons à présent et . On note . L’application   est aussi une solution bornée sur de . On en déduit que nécessairement .  Ainsi, pour toute , . On démontre (exercice classique) que pour tout entier , .  De plus, le théorème de Cayley-Hamilton ainsi que le lemme de décomposition des noyaux montrent que   Conclusion D’après ce qui précède , donc est diagonalisable.  Réciproquement, supposons est diagonalisable et .  Dans ce cas, toute solution de est combinaison linéaire de solutions de la forme qui sont toutes bornées sur .  Conclusion toutes les solutions sur de sont bornées sur .       Soient et   (où la fonction inconnue est à valeurs dans ).  Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?  Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?    Supposons que toutes les solutions sur de sont 1-périodiques.  Considérons et un vecteur propre associé.  On sait alors que l’application est une solution sur de .  Comme elle est 1-périodique, , donc .  Considérons toujours et cette fois . On note .  L’application   est aussi une solution sur de . Elle est donc 1-périodique, donc   donc .  Ainsi, pour toute , . On suit la même démarche qu’à l’exercice précédent, on montre que pour tout entier , puis le théorème de Cayley-Hamilton et le lemme de décomposition des noyaux montrent que   Conclusion d’après ce qui précède , donc est diagonalisable.  Réciproquement, on vérifie facilement que si est diagonalisable et si , alors toutes les solutions sur de sont 1-périodiques.       Soit une application continue telle que .  On considère également une solution sur , de l’équation   vérifiant en outre .     Que peut-on dire de si ?    Si , le théorème de Cauchy-Lipschitz montre que la fonction est identiquement nulle sur .      On suppose à présent .   Démontrer que s’annule au moins une fois sur .  Démontrer que s’annule une infinité de fois sur .     Afin de résoudre cette question on aura besoin du lemme suivant :  Lemme : Soit une fonction dérivable possédant une limite en . Alors tend vers en .  Preuve du lemme : D’après l’hypothèse faite sur , il existe tels que pour tout . L’inégalité des accroissements finis permet de conclure que pour ces mêmes valeurs de ,   d’où immédiatement la conclusion souhaitée.    Supposons que ne s’annule pas sur . Elle possède donc sur cet intervalle un signe constant et comme , elle y reste strictement positive. Il s’ensuit que est strictement croissante sur , donc et donc (éventuellement ). Le précédent lemme montre qu’alors , ce qui est impossible.  Conclusion s’annule au moins une fois sur .    Ici aussi on raisonne par l’absurde en supposant que ne possède qu’un nombre fini de zéros sur . On note le plus grand d’entre eux. La fonction est alors de signe constant sur . Supposons par exemple qu’elle y est strictement positive.  Dans ce cas, est négative sur et donc est concave sur et donc pour tout et pour tout ,   On en déduit que si , alors , donc , ce qui est impossible.  Conclusion est négative sur , donc décroit sur et comme elle est minorée par 0 sur cet intervalle, elle possède une limite finie en .  De plus on a nécessairement sinon et le précédent lemme montre alors que , puis que ce qui est impossible.  On aboutit à une contradiction car et décroissante sur , donc sur .         Méthode d’Euler – Python.   Cet exercice utilise le lemme de Gronwall, exercice 7.12.  Soit une application continue et intégrable sur .  On lui associe l’équation différentielle   Soit .  Dans cette question uniquement, .  Soit une solution de l’équation telle que . À l’aide de la méthode d’Euler (ou bien l’instruction du module ), tracer le support de la courbe paramétrée   pour diverses valeurs du couple .  Que peut-on conjecturer en ce qui concerne le comportement asymptotique de la fonction en ?    Voici le code Python :   On peut penser que la solution est bornée (surtout en utilisant ).       Soit application continue de dans et non intégrable sur .  On veut démontrer qu’une solution (non identiquement nulle) de l’équation différentielle sur   admet une infinité de zéros.     Vérifier ce résultat sur un cas simple de votre choix.    Il suffit de choisir . Les solutions de l’équation sont toutes les fonctions de la forme   Si ou est nul, il est clair que possède une infinité de zéros. S’ils ne sont pas nuls, on considère un réel tel que . On a alors   et la conclusion s’en suit immédiatement.        Dans cet exercice on s’intéresse à l’équation différentielle   où est une fonction continue pour laquelle la fonction est intégrable sur avec   On note l’espace vectoriel des fonctions qui sont continues et bornées sur . Cet espace est muni de la norme définie par      Soit . Démontrer que la fonction   est définie, bornée et de classe sur l’intervalle .    Soit fixé. La fonction est continue sur et pour tout   ce qui assure l’intégrabilité de sur .  De plus,   Comme les fonctions et sont continues, on en déduit le caractère de et la relation   d’où le caractère de et la relation   Enfin, est bornée car         Soit un polynôme dont les racines ont toutes une partie réelle strictement négative. On considère également une fonction de limite nulle en . On leur associe l’équation différentielle linéaire d’ordre   Démontrer que toute solution de cette équation tend vers 0 en .  Indication : on pourra commencer par examiner le cas où .     Démontrer que toute solution de cette équation tend vers 0 en .    On peut commencer par observer que toute solution de est indéfiniment dérivable (démontrer par récurrence qu’une telle fonction est de classe , pour tout ). Pour la question posée, on procède par récurrence.  Cas : On a donc ici . On considère donc une fonction telle que pour tout réel ,   ce qui équivaut à   d’où l’existence d’un complexe tel que pour tout ,   d’où   On en déduit, pour les mêmes valeurs de ,   Comme , . Il ne reste plus qu’à s’occuper du second terme. Pour cela on se donne un réel . Comme tend vers 0 en , il existe un réel tel que pour tout , . On en déduit, toujours, pour ,       Enfin , donc il existe tel que pour tout , .  En définitive,   donc et donc .  Cas général : Supposons la propriété démontrée au rang . On considère donc l’équation d’ordre ,   On peut remarquer que cette équation peut s’écrire sous la forme où est l’opérateur de dérivation sur l’espace et où . Soit une racine de . Il existe donc , de degré tel que . L’équation peut alors s’écrire   D’après l’étude du cas , la fonction tend vers 0 en et d’après l’hypothèse de récurrence, tend aussi vers 0 en .        Soit une fonction continue strictement négative. On s’intéresse dans cet exercice aux solutions sur de l’équation différentielle   On note la solution de vérifiant .     Démontrer que la fonction est strictement positive, strictement croissante et convexe sur .    Supposons que s’annule au moins une fois dans . On note   Or est une partie fermée de , donc . De plus, comme , le théorème des valeurs intermédiaires montre que sur . On en déduit que sur , donc   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .     Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .          Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.        Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.     "
},
{
  "id": "sec-eqdiff-exercices-entrainement-2",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-2",
  "type": "Exercice",
  "number": "1.5.1",
  "title": "",
  "body": "   Déterminer les solutions développables en série entière de l'équation différentielle      Déterminer les solutions développables en série entière de l'équation différentielle .    Soit une suite réelle pour laquelle le rayon de convergence de la série entière est strictement positif. On note la somme de cette série entière sur . C’est une fonction indéfiniment dérivable et est solution, sur , de l’équation si et seulement si    et par unicité du développement en série entière cela équivaut à ce que pour tout , .  Conclusion est solution, sur , de l’équation si et seulement si pour tout , . Il reste à constater que le rayon de convergence de la série entière ainsi obtenue est égal à car .      On note la solution DSE qui vérifie et on pose   Étudier le sens de variation de et en déduire que possède une limite finie en .    On a donc, pour tout réel , .  La fonction est évidemment dérivable sur et pour tout réel ,   de sorte que est décroissante sur .  Comme elle est minorée par 0 sur , elle possède une limite finie en .      En déduire que est bornée sur et que .    Pour tout réel , ,  on peut en déduire que est bornée sur . De même,   donc .    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-3",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-3",
  "type": "Exercice",
  "number": "1.5.2",
  "title": "zéros d’une solution d’une équation différentielle linéaire homogène du second ordre..",
  "body": "  zéros d’une solution d’une équation différentielle linéaire homogène du second ordre.   Soient intervalle de et . On considère l’équation   Soit une solution sur réelle et non identiquement nulle de .     On suppose qu’il existe deux réels tels que et . Démontrer que l’ensemble   est un ensemble fini.    Supposons au contraire que soit infini : il contient alors une suite formée de réels deux à deux distincts. Quitte à extraire une sous-suite convenable on peut supposer que converge vers .  En tenant compte de la continuité de , on voit que . De plus, par application du théorème de Rolle, pour tout , il existe tel que .  On en déduit que converge vers , puis par continuité de , on obtient .  Conclusion comme , le théorème de Cauchy-Lipschitz montre que est identiquement nulle sur , ce qui a été exclu. L’ensemble est donc fini.      En déduire que l’ensemble des zéros de est un ensemble au plus dénombrable.    On peut écrire comme l’union d’une suite de segments.  D’après la question précédente, l’ensemble est fini, par conséquent l’ensemble des zéros de est fini ou dénombrable.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-4",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-4",
  "type": "Exercice",
  "number": "1.5.3",
  "title": "",
  "body": "   Soient un réel strictement positif, telle que pour tout réel , . On considère l’équation différentielle   Soit une solution non identiquement nulle de .     Expliquer pourquoi on aura pour tout réel , .    D’après le théorème de Cauchy-Lipschitz, comme n’est pas identiquement nulle, pour tout réel , .      On admet qu’il existe alors deux fonctions et toutes deux de classe et telles que    Exprimer en fonction de et de .  En déduire que est une bijection de sur .  Conclure que possède une infinité de zéros.     On a donc et  d’où ,  de plus, ,  d’où le système d’équations   En résolvant à l’aide des formules de Cramer    Or , donc et de plus la fonction   est continue, -périodique et strictement positive.  On en déduit que .  Conclusion , donc est une bijection décroissante de sur .  De plus, pour tout réel ,   donc et donc .  Pour tout entier tel que , il existe un unique réel tel que . On a alors .  Conclusion possède une infinité de zéros dans .    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-5",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-5",
  "type": "Exercice",
  "number": "1.5.4",
  "title": "",
  "body": "   Soient et tels que   Démontrer que toute solution de l’équation est bornée au voisinage de .  Indication : considérer la fonction .  Démontrer que toute solution de l’équation est bornée au voisinage de .    Comme indiqué, on considère la fonction .  Elle est de classe sur et   On en déduit que sur , donc est décroissante sur cet intervalle. Conclusion est majorée par sur donc est majorée par sur .   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-6",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-6",
  "type": "Exercice",
  "number": "1.5.5",
  "title": "",
  "body": "   Soit une fonction continue et une fonction de classe telle que   On suppose qu’il existe deux réels tels que . Démontrer que .  Indication : si n’est pas la fonction nulle, on utilisera l’exercice 7.2 p. 458 pour se ramener au cas où ne s’annule pas sur .  Démontrer que .    Si n’est pas identiquement nulle, l’exercice 7.2 montre que l’on peut se ramener au cas où s’annule en , en et où ne s’annule pas sur . De plus, grâce au théorème des valeurs intermédiaires, est de signe constant sur et quitte à changer en son opposée, on peut supposer sur . En notant une primitive de et en multipliant (1) par , on obtient   puis en intégrant entre et ,   Enfin, et même (car si , il résulte du théorème de Cauchy-Lipschitz que l’on aurait sur , ce qui n’est pas le cas). De même, .  Conclusion alors que , d’où une contradiction. On en déduit que est identiquement nulle sur . En particulier , donc est identiquement nulle sur .   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-7",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-7",
  "type": "Exercice",
  "number": "1.5.6",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .     Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .        Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-8",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-8",
  "type": "Exercice",
  "number": "1.5.7",
  "title": "",
  "body": "   Soient et      Soit telle que et . Démontrer que et sont strictement positives sur et que .    Supposons que s’annule au moins une fois sur .  L’ensemble est alors une partie fermée non vide de , elle possède donc un plus petit élément et . De plus, d’après le théorème des valeurs intermédiaires, est strictement positive sur , donc est positive sur cet intervalle et donc est convexe. On en déduit alors que pour tout ,   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .      Soient telles que    Calculer . Démontrer que sur , et sont monotones de monotonies opposées.  Démontrer que et tendent vers la même limite en .     Posons . Il s’agit d’une fonction de classe et   W est donc constante. De plus, .  Par ailleurs, comme et , la fonction est strictement positive au voisinage de à droite et en reprenant la raisonnement de la question 1), on montre que est strictement positive sur et tend vers en . On en déduit également que est strictement positive et croissante sur cet intervalle. On a alors, sur ,    Conclusion est strictement décroissante sur et est croissante sur cet intervalle.  Écrivons   car pour , et .  Sur , étant croissante et , on en déduit que sur .  De plus, pour , donc la fonction décroissante sur , est minorée par 0 donc converge vers une limite finie en .  Et, bien sûr,       Démontrer qu’il existe une unique telle que soit strictement positive, décroissante sur et telle que .    Le couple est un système fondamental de solutions sur de (car leur wronskien ne s’annule pas). Toute solution de est donc de la forme , où et sont des réels. La condition revient à imposer .  Le fait que soit décroissante et minorée par 0 sur impose à d’être bornée.  Écrivons sur ,   on en déduit que si , on aurait donc aurait une limite infinie en , absurde. Donc, nécessairement, .  Ce qui prouve l’unicité de , cette fonction ne peut s’écrire que sous la forme .  Montrons que cette fonction est bien décroissante et positive.  Sur , car sur , et est strictement décroissante de limite .  Toujours sur , on a car sur , et est strictement croissante de limite .  Conclusion Il existe une unique telle que soit strictement positive, décroissante sur et telle que , c’est .    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-9",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-9",
  "type": "Exercice",
  "number": "1.5.8",
  "title": "Théorème de relèvement pour les fonctions de classe <span class=\"process-math\">\\(\\mathcal{C}^1\\text{.}\\)<\/span>.",
  "body": "  Théorème de relèvement pour les fonctions de classe .   Soient un intervalle de , , , telles que . On considère également un réel tel que   ainsi que la fonction   Démontrer que pour tout réel ,   Démontrer que pour tout réel ,     La fonction   est de classe sur car est continue sur cet intervalle. De plus, . Afin de conclure, on introduit la fonction   Elle est évidemment de classe sur et   Or , donc par dérivation et donc   Conclusion est constante sur égale à , par conséquent .   "
},
{
  "id": "exe-7-9",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#exe-7-9",
  "type": "Exercice",
  "number": "1.5.9",
  "title": "Théorème de Sturm.",
  "body": "  Théorème de Sturm   Soient un intervalle non trivial de , deux fonctions continues telles que . On considère également deux fonctions non identiquement nulles, de classe telles que   Enfin, et désignent deux zéros consécutifs de .     Démontrer que s’annule au moins une fois dans ou que .    Comme ne s’annule pas sur , elle y est de signe constant et quitte à la changer en son opposée on peut supposer qu’elle est strictement positive sur . Supposons que ne s’annule pas dans . Elle y est donc de signe constant et ici aussi, quitte à changer en son opposée, on peut supposer sur .  Considérons alors le wronskien du couple , .  Il s’agit là d’une fonction de classe sur et   Ainsi, est décroissante sur .  Or et .  De même et .  Conclusion   On a donc sur .  En particulier et .      Dans le cas où ne s’annule pas dans , démontrer que est proportionnelle à sur le segment .    Supposons que . En reprenant les précédents calculs, on voit que l’on a toujours décroissante sur avec est nulle sur .  On en déduit que sur ,   Il existe donc tel que sur . Cette relation est encore vraie en et en .    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-11",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-11",
  "type": "Exercice",
  "number": "1.5.10",
  "title": "",
  "body": "   Une application de  Soit une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .  Démontrer que l’ensemble des zéros de est infini dénombrable.    On sait (voir exercice 7.2) que possède un nombre fini de zéros dans tout segment.  Comme est l’union d’une famille dénombrable de segments, l’ensemble est l’union dénombrable d’ensembles finis, il est donc au plus dénombrable.  Il reste à voir que est infini. Supposons au contraire que soit fini.  Dans ce cas, il existe un réel pour lequel ne s’annule pas sur .  On peut supposer (par application du théorème des valeurs intermédiaires) que est strictement positive sur .  Il s’ensuit que sur , de sorte que est concave sur .  On en déduit que pour ,   Si , alors tendrait vers en , ce qui n’est pas possible.  En définitive, est positive sur , donc est croissante sur .  On en déduit que pour tout ,   L’inégalité des accroissements finis montre que .  Une nouvelle application de l’inégalité des accroissements finis permet de conclure que , d’où une contradiction puis que par hypothèse sur .  Conclusion est un ensemble infini dénombrable.   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-12",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-12",
  "type": "Exercice",
  "number": "1.5.11",
  "title": "",
  "body": "   Une application de  Soit une fonction continue, -périodique ( ).  On considère une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .  On note l’ensemble des zéros de .  Démontrer que ou bien ou bien est infini.  Indication : si et sont deux zéros consécutifs de , démontrer que s’annule dans tout segment de la forme , où .    Supposons que possède au moins deux zéros . En utilisant la conclusion de l’exercice 7.2, on se ramène au cas où et sont deux zéros consécutifs de .  Dans ce cas (théorème des valeurs intermédiaires), est de signe constant sur et quitte à changer en son opposé, on peut supposer que est strictement positive sur . Pour tout entier , on note   Comme la fonction est -périodique, est solution, sur , de l’équation .  On utilise alors les conclusions de l’exercice 7.9 avec ici .  La fonction s’annule au moins une fois dans ou alors .  Dans les deux cas, on a répondu à la question. Considérons alors un entier tel que . On vérifie que pour , les segments sont deux à deux disjoints car   Conclusion si , alors est infini.   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-13",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-13",
  "type": "Exercice",
  "number": "1.5.12",
  "title": "Le lemme de Gronwall..",
  "body": " Le lemme de Gronwall.    Soient et un réel positif tels que   Démontrer que pour tout ,   Démontrer que pour tout ,     Supposons d’abord et considérons la fonction   Cette fonction est de classe et pour tout ,   d’où, par intégration   d’où   Supposons à présent que . Dans ce cas, on peut appliquer tout ce qui précède pour tout ,   d’où le résultat cherché en faisant tendre vers 0.   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-14",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-14",
  "type": "Exercice",
  "number": "1.5.13",
  "title": "Un problème de conditions aux limites..",
  "body": " Un problème de conditions aux limites.    Soient . On suppose que . On s’intéresse à l’équation différentielle   où la fonction inconnue est supposée à valeurs réelles.  Soit une solution de l’équation homogène associée vérifiant . En considérant , démontrer que est constante, égale à zéro sur .    On considère comme c’est indiqué dans l’énoncé . Ce nombre est clairement négatif. Par ailleurs, en tenant compte du fait que ,   Conclusion et comme est positive et continue, on peut conclure que sur , donc est constante et nécessairement nulle vu que .   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-15",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-15",
  "type": "Exercice",
  "number": "1.5.14",
  "title": "",
  "body": "   Soit une fonction de classe telle que . Démontrer que les solutions sur de l’équation   sont toutes bornées ainsi que leurs dérivées d’ordre 1. Indication : on pourra considérer la fonction puis utiliser le lemme de Gronwall (exercice 7.12).  Démontrer que les solutions sur de l’équation sont toutes bornées ainsi que leurs dérivées d’ordre 1.    Soit une solution sur de l’équation . On lui associe la fonction . Cette fonction est de classe et . Ainsi, pour tout réel ,    d’où, pour les mêmes valeurs de ,   Le lemme de Gronwall permet alors de conclure que   Conclusion est bornée sur et il en est donc de même de et de .   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-16",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-16",
  "type": "Exercice",
  "number": "1.5.15",
  "title": "",
  "body": "   Soient un intervalle ouvert de , . On considère l’équation différentielle   On suppose connu le fait que les zéros de toute solution sur non identiquement nulle de sont isolés.     Soient . On suppose que et possèdent un zéro commun. Démontrer alors que ces deux fonctions sont proportionnelles.    Supposons qu’il existe tel que . Comme et sont des solutions non identiquement nulles de , et ne sont pas nuls. On considère alors . C’est une solution sur de qui est telle que et . On en déduit que est la fonction nulle, par conséquent et sont proportionnelles.      Soit un système fondamental de solutions sur de . Démontrer qu’entre deux zéros consécutifs de il y a exactement un zéro de .    Soient un système fondamental de solutions sur de et deux zéros consécutifs de . Quitte à changer en , on peut supposer grâce au théorème des valeurs intermédiaires que est strictement positive sur .  Supposons à présent que ne s’annule pas sur . À nouveau, on peut supposer sur . Comme et sont linéairement indépendantes, il résulte de la question 1) que ne s’annule ni en ni en . Ainsi et .  Par ailleurs si on note le wronskien du couple , .  On a et même (car sinon on aurait , ce qui entraînerait ). De même . Ainsi   ce qui entraînerait via le théorème des valeurs intermédiaires l’existence d’un zéro pour dans . Ceci est impossible vu que est un système fondamental de solutions sur de .  Conclusion entre et , s’annule au moins une fois. De plus elle ne peut s’annuler deux fois sans quoi le précédent raisonnement appliqué au couple démontrerait l’existence pour d’un zéro strictement compris entre et .    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-17",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-17",
  "type": "Exercice",
  "number": "1.5.16",
  "title": "",
  "body": "   Soient et   (où la fonction inconnue est à valeurs dans ).  Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .  Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .    On note une norme sur .  Supposons que toutes les solutions sur de sont bornées. Soient et un vecteur propre associé. On sait alors que l’application est une solution sur de . De plus, pour tout réel ,   Comme est bornée sur , cela impose .  Conclusion .  Considérons à présent et . On note . L’application   est aussi une solution bornée sur de . On en déduit que nécessairement .  Ainsi, pour toute , . On démontre (exercice classique) que pour tout entier , .  De plus, le théorème de Cayley-Hamilton ainsi que le lemme de décomposition des noyaux montrent que   Conclusion D’après ce qui précède , donc est diagonalisable.  Réciproquement, supposons est diagonalisable et .  Dans ce cas, toute solution de est combinaison linéaire de solutions de la forme qui sont toutes bornées sur .  Conclusion toutes les solutions sur de sont bornées sur .   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-18",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-18",
  "type": "Exercice",
  "number": "1.5.17",
  "title": "",
  "body": "   Soient et   (où la fonction inconnue est à valeurs dans ).  Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?  Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?    Supposons que toutes les solutions sur de sont 1-périodiques.  Considérons et un vecteur propre associé.  On sait alors que l’application est une solution sur de .  Comme elle est 1-périodique, , donc .  Considérons toujours et cette fois . On note .  L’application   est aussi une solution sur de . Elle est donc 1-périodique, donc   donc .  Ainsi, pour toute , . On suit la même démarche qu’à l’exercice précédent, on montre que pour tout entier , puis le théorème de Cayley-Hamilton et le lemme de décomposition des noyaux montrent que   Conclusion d’après ce qui précède , donc est diagonalisable.  Réciproquement, on vérifie facilement que si est diagonalisable et si , alors toutes les solutions sur de sont 1-périodiques.   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-19",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-19",
  "type": "Exercice",
  "number": "1.5.18",
  "title": "",
  "body": "   Soit une application continue telle que .  On considère également une solution sur , de l’équation   vérifiant en outre .     Que peut-on dire de si ?    Si , le théorème de Cauchy-Lipschitz montre que la fonction est identiquement nulle sur .      On suppose à présent .   Démontrer que s’annule au moins une fois sur .  Démontrer que s’annule une infinité de fois sur .     Afin de résoudre cette question on aura besoin du lemme suivant :  Lemme : Soit une fonction dérivable possédant une limite en . Alors tend vers en .  Preuve du lemme : D’après l’hypothèse faite sur , il existe tels que pour tout . L’inégalité des accroissements finis permet de conclure que pour ces mêmes valeurs de ,   d’où immédiatement la conclusion souhaitée.    Supposons que ne s’annule pas sur . Elle possède donc sur cet intervalle un signe constant et comme , elle y reste strictement positive. Il s’ensuit que est strictement croissante sur , donc et donc (éventuellement ). Le précédent lemme montre qu’alors , ce qui est impossible.  Conclusion s’annule au moins une fois sur .    Ici aussi on raisonne par l’absurde en supposant que ne possède qu’un nombre fini de zéros sur . On note le plus grand d’entre eux. La fonction est alors de signe constant sur . Supposons par exemple qu’elle y est strictement positive.  Dans ce cas, est négative sur et donc est concave sur et donc pour tout et pour tout ,   On en déduit que si , alors , donc , ce qui est impossible.  Conclusion est négative sur , donc décroit sur et comme elle est minorée par 0 sur cet intervalle, elle possède une limite finie en .  De plus on a nécessairement sinon et le précédent lemme montre alors que , puis que ce qui est impossible.  On aboutit à une contradiction car et décroissante sur , donc sur .      "
},
{
  "id": "sec-eqdiff-exercices-entrainement-20",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-20",
  "type": "Exercice",
  "number": "1.5.19",
  "title": "Méthode d’Euler – Python..",
  "body": "  Méthode d’Euler – Python.   Cet exercice utilise le lemme de Gronwall, exercice 7.12.  Soit une application continue et intégrable sur .  On lui associe l’équation différentielle   Soit .  Dans cette question uniquement, .  Soit une solution de l’équation telle que . À l’aide de la méthode d’Euler (ou bien l’instruction du module ), tracer le support de la courbe paramétrée   pour diverses valeurs du couple .  Que peut-on conjecturer en ce qui concerne le comportement asymptotique de la fonction en ?    Voici le code Python :   On peut penser que la solution est bornée (surtout en utilisant ).   "
},
{
  "id": "sec-eqdiff-exercices-entrainement-21",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-21",
  "type": "Exercice",
  "number": "1.5.20",
  "title": "",
  "body": "   Soit application continue de dans et non intégrable sur .  On veut démontrer qu’une solution (non identiquement nulle) de l’équation différentielle sur   admet une infinité de zéros.     Vérifier ce résultat sur un cas simple de votre choix.    Il suffit de choisir . Les solutions de l’équation sont toutes les fonctions de la forme   Si ou est nul, il est clair que possède une infinité de zéros. S’ils ne sont pas nuls, on considère un réel tel que . On a alors   et la conclusion s’en suit immédiatement.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-22",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-22",
  "type": "Exercice",
  "number": "1.5.21",
  "title": "",
  "body": "   Dans cet exercice on s’intéresse à l’équation différentielle   où est une fonction continue pour laquelle la fonction est intégrable sur avec   On note l’espace vectoriel des fonctions qui sont continues et bornées sur . Cet espace est muni de la norme définie par      Soit . Démontrer que la fonction   est définie, bornée et de classe sur l’intervalle .    Soit fixé. La fonction est continue sur et pour tout   ce qui assure l’intégrabilité de sur .  De plus,   Comme les fonctions et sont continues, on en déduit le caractère de et la relation   d’où le caractère de et la relation   Enfin, est bornée car     "
},
{
  "id": "sec-eqdiff-exercices-entrainement-23",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-23",
  "type": "Exercice",
  "number": "1.5.22",
  "title": "",
  "body": "   Soit un polynôme dont les racines ont toutes une partie réelle strictement négative. On considère également une fonction de limite nulle en . On leur associe l’équation différentielle linéaire d’ordre   Démontrer que toute solution de cette équation tend vers 0 en .  Indication : on pourra commencer par examiner le cas où .     Démontrer que toute solution de cette équation tend vers 0 en .    On peut commencer par observer que toute solution de est indéfiniment dérivable (démontrer par récurrence qu’une telle fonction est de classe , pour tout ). Pour la question posée, on procède par récurrence.  Cas : On a donc ici . On considère donc une fonction telle que pour tout réel ,   ce qui équivaut à   d’où l’existence d’un complexe tel que pour tout ,   d’où   On en déduit, pour les mêmes valeurs de ,   Comme , . Il ne reste plus qu’à s’occuper du second terme. Pour cela on se donne un réel . Comme tend vers 0 en , il existe un réel tel que pour tout , . On en déduit, toujours, pour ,       Enfin , donc il existe tel que pour tout , .  En définitive,   donc et donc .  Cas général : Supposons la propriété démontrée au rang . On considère donc l’équation d’ordre ,   On peut remarquer que cette équation peut s’écrire sous la forme où est l’opérateur de dérivation sur l’espace et où . Soit une racine de . Il existe donc , de degré tel que . L’équation peut alors s’écrire   D’après l’étude du cas , la fonction tend vers 0 en et d’après l’hypothèse de récurrence, tend aussi vers 0 en .    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-24",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-24",
  "type": "Exercice",
  "number": "1.5.23",
  "title": "",
  "body": "   Soit une fonction continue strictement négative. On s’intéresse dans cet exercice aux solutions sur de l’équation différentielle   On note la solution de vérifiant .     Démontrer que la fonction est strictement positive, strictement croissante et convexe sur .    Supposons que s’annule au moins une fois dans . On note   Or est une partie fermée de , donc . De plus, comme , le théorème des valeurs intermédiaires montre que sur . On en déduit que sur , donc   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-25",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-25",
  "type": "Exercice",
  "number": "1.5.24",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .     Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .      "
},
{
  "id": "sec-eqdiff-exercices-entrainement-26",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-26",
  "type": "Exercice",
  "number": "1.5.25",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-27",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-27",
  "type": "Exercice",
  "number": "1.5.26",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-28",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-28",
  "type": "Exercice",
  "number": "1.5.27",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-29",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-29",
  "type": "Exercice",
  "number": "1.5.28",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-30",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-30",
  "type": "Exercice",
  "number": "1.5.29",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-31",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-31",
  "type": "Exercice",
  "number": "1.5.30",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-32",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-32",
  "type": "Exercice",
  "number": "1.5.31",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-33",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-33",
  "type": "Exercice",
  "number": "1.5.32",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-34",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-34",
  "type": "Exercice",
  "number": "1.5.33",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-35",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-35",
  "type": "Exercice",
  "number": "1.5.34",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-36",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-36",
  "type": "Exercice",
  "number": "1.5.35",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-exercices-entrainement-37",
  "level": "2",
  "url": "sec-eqdiff-exercices-entrainement.html#sec-eqdiff-exercices-entrainement-37",
  "type": "Exercice",
  "number": "1.5.36",
  "title": "",
  "body": "   Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle      Démontrer que possède au moins une solution sur non bornée.    Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques",
  "level": "1",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html",
  "type": "Section",
  "number": "1.6",
  "title": "Thèmes classiques",
  "body": " Thèmes classiques    Ce chapitre propose une initiation à certaines thèmatiques liées aux EDL . Des notions qui sont abordées sous différentes formes dans les sujets de concours qui traitent des équations différentielles.  Les résultats sont exposés sous forme de cours (hors programme) et la plupart sont démontré dans les exercices proposés dans la subsection .     Équation et applications résolvantes    et sont des applications continues définies sur à valeurs respectivement dans et dans . On considère les équations différentielles     Les résultats de cette subsection sont traités dans les exercices et .    Équation résolvante de   On appelle équation résolvante de , l'équation différentielle linéaire homogène du premier ordre   l'inconnue étant une fonction dérivable de dans .    Espace des solutions de  s'écrit sous la forme , où est l'application continue de dans définie par pour tout et . .    Transfert de solutions  Si est une solution de sur alors   pour tout , est une solution de sur .  pour tout , est une solution de sur .     Conservation du rang  Si est une solution de sur alors le rang de est le même pour tout . En particulier s'il existe tel que est inversible alors est inversible pour tout . On dit alors que est une solution fondamentale de l'équation résolvante .    Solutions de et en fonction d'une solution fondamentale  Si une solution fondamentale de , alors   les solutions de sont les fonctions où .  les solutions de sont les fonctions où .   Les solutions de et celles de peuvent donc toutes s'exprimer à l'aide d'une seule solution de . Mais ce constat est à peu près inutile quand il s'agit de résoudre effectivement . Il est beaucoup moins évident de déterminer une solution de que de déterminer directement des solutions de .  Si est une base de alors les fonctions forment un système fondamental de solutions de . Leurs wronksien dans la base est la fonction .  d'où le titre de solution fondamentale attribué à ce genre d'application.    Expression des solutions avec conditions initiales  Si et est l'unique solution de telle que alors   pour toute solution de : .  pour toute solution de : .      Application résolvante de   Définition de l'application résolvante  On appelle application résolvante de l'équation homogène , l'application définie par   où est l'unique solution de vérifiant . Précisons :   pour tout , donne la position dans à l'instant de la solution de qui est passée, ou passera, par à l'instant .  si on fixe , l'application donne l'évolution au cours du temps de la solution de qui est passé, ou passera, par à l'instant .  si on fixe , l'application est le flot à l'instant de toutes les solutions qui sont passées, ou passeront par à l'instant .     Une application pour les exprimer toutes  Soit   Pour tout , l'unique solution de telle que est donnée par , soit .  pour tout , l'unique solution de telle que est donnée par , soit .     Les propriétés de la résolvante   pour tout , est un endomorphisme inversible de .  pour tout , . En particulier .  est de classe sur et pour tout       Expression de la résolvante en fonction des solutions fondamentales  Pour toute solution fondamentale de l'équation on a      Résolvante et équation complète   Variation des constantes  Sachant que les solutions de sont les fonctions où est un vecteur quelconque de , la méthode de la variation des constantes revient donc à faire varier le vecteur . On pose donc . Alors Ce qui permet en théorie de calculer et donc .    Formule de Duhammel  Soit . L'unique solution de vérifiant la condition initiale est donnée par la formule dite de Duhammel :   Dans cette expression de , l'intégrale représente une solution particulière de l'équation , la solution qui à l'instant passe par le vecteur nul. L'autre partie est la solution de l'équation homogène qui à l'instant passe par le point .  On notera également que cette expression généralise celle de la solution du problème de Cauchy d'une EDL à coefficients constant vue dans     Cas où   On suppose que pour tous  Alors selon la résolvante de est donnée par      Résolvantes d'une équation à coefficients constants  On suppose ici que l'application est constante. L'équation résolvante de est    Les solutions de sont les fonctions où est un endomorphisme quelconque de . En particulier, l'application   est une solution fondamentale de . Celle qui prend la valeur en .   L'application résolvante de est donc donnée par       Solutions périodiques d'une EDL périodique  Voir      Thèmes sur les équations scalaires du deuxième ordre   Dans tout cette subsection, on se donne une EDLS d'ordre  et son équation homogène qu'on suppose normalisables sur l'intervalle , sauf mention explicite du contraire,   On suppose en outre que l'intervalle est ouvert.    Solutions développables en séries entières  Commençons par quelque résultats sur la possibilité que l'équation homogène admette des solutions qui sont développables en séries entières au voisinage de . Si de telles solutions existent alors elles peuvent contribuer à résoudre complétement l'équation .  On suppose que . On peut démontrer les deux résultats fondamentaux suivants :  Cas d'une équation normalisée   On suppose que l'équation est normalisée et que les fonctions et sont développables en séries entières en sur un intervalle . Alors toutes les solutions de sur sont développables en séries entières en sur .    Voir exercice      Cas d'une équation non normalisable   Dans le cas où n'est pas normalisable en , si on peut la ramener à une équation de la forme   où et sont développables en séries entières en sur un intervalle , alors admet au moins une solution sur de la forme   où est une série entière de rayon de convergence et est une racine du polynôme   La fonction est dite une solution de Frobenius de et est dit polynôme initialisateur de .    Voir exercice .      Transformation de l'équation homogène  Tout au long du chapitre précédent, on a utilisé, de façon éparpillée, quelques idées simples pour transformer une EDLS du second ordre. Le but ici est de les rassembler.   Transformations de type  Soit une fonction de classe qui ne s'annule pas sur . En posant , alors est équivalente à l'équation   On en a dégagé deux applications intéressantes :    La méthode de Lagrange :  Si est une solution de qui ne s'annule pas sur , alors équivaut à l' EDLS d'ordre en   Cette méthode permet de résoudre complètement l'équation par calcul de primitives.    Forme normale de :  Si est une solution non nulle de l'équation , alors on obtient la forme normale de : avec .      Forme exacte, équation adjointe  On suppose que est de classe et est de classe sur .    Transformation en une forme exacte  On dit que admet une forme exacte sur s'il existe une fonction de classe  ne s'annulant pas sur  et une fonction de classe telles que soit équivalente à   où est une fonction continue sur . Si et existent, l'équation est dite une forme exacte de sur .  Une équation exacte peut être résolue par calcul de primitives. Il est donc prévisible que s'y ramener fasse intervenir d'autres équations qu'on ne peut résoudre complètement. En l'occurrence, l'équation ci-dessus.    Existence d'une forme exacte, équation adjointe de  L'équation admet une forme exacte sur si l' EDLS homogène   admet au moins une solution qui ne s'annule pas sur . Les fonctions , et sont alors données par les relations   L'équation est dite équation adjointe de . Une solution de l'équation adjointe qui ne s'annule pas sur est dite un facteur intégrant de l'équation sur . Si on connaît une telle fonction, on peut effectivement résoudre complètement l'équation par calcul de primitives.   Supposons pour l'instant que les fonctions et existent, on aura   D'un autre côté, si est une fonction de classe qui ne s'annule pas sur , alors   Il suffit donc de déterminer des fonctions , et telles que   Une condition nécessaire pour que de telles fonctions existent est que :   La fonction devrait donc être une solution de l' EDLS homogène d'ordre :   Maintenant si admet une solution qui ne s'annule pas sur , il suffit selon les relations ci-dessus de poser , et pour que soit équivalente à l'équation .       L'équation adjointe  On rappelle l'écriture de et de son équation adjointe :   On vérifie que :    L'équation adjointe de est .    Les équations et sont équivalentes si et seulement si . Ce qui ramène l'équation à   D'où le titre d'équation auto-adjointe donné à ce genre d'équations.   Lien entre solutions de et celles de son équation adjointe  Les solutions de sont de la forme où est une solution quelconque de et est l'une des solutions non nulles de l' EDLS homogène d'ordre :   Ce qui implique que si on peut résoudre , alors on peut le faire pour et vice versa.   Fixons une fonction non nulle telle que et considérons une fonction de classe sur . Posons . Alors    En multipliant par , elle équivaut à l'équation auto-adjointe        Problèmes aux limites  Soient deux éléments de . On se donne deux scalaires et et deux formes linéaires et définies sur par   où et sont deux éléments donnés non colinéaires de .  Le système d'équations   est dit un problème aux limites de en et . Il peut avoir l'une des formes particulières suivantes :    Problème aux limites de première espèce :     Problème aux limites de deuxième espèce :     Problème aux limites périodique :     Problème de Sturm-Liouville :     Contrairement aux problèmes de Cauchy, un problème aux limites peut avoir plusieurs solutions comme n'en avoir aucune.   CNS d'existence et d'unicité  Considérons un système fondamental de solutions de . Alors le problème aux limites admet une solution unique si et seulement si    Soit une solution particulière de et posons . On a alors   Ce dernier système d'équations, d'inconnues et , admet une solution unique si et seulement si .      Zéros des solutions d'une EDLS homogène du second ordre   Ce thème sera traité de façon assez exhaustive vu son intérêt. Il concerne la distribution des zéros des solutions d'une EDLS homogène d'ordre .    Le cas général   Zéros communs    Deux solutions de qui ont un zéro en commun sont nécessairement colinéaires.    Si et sont deux solutions de sur qui ont un zéro en commun et est leur wronksien, alors et donc et sont colinéaires.      Répartition des zéros des solutions de dans le cas général    Soit une solution non nulle de sur . Alors elle admet au plus un nombre fini de zéros dans chaque segment de .    Soit un segment . Supposons par l'absurde que admet une infinité de zéros dans et considérons une suite injective dont tous les termes sont des zéros de dans . étant un segment, admet une suite extraite qui converge, on peut donc supposer que elle-même converge. Soit sa limite. Puisque pour tout , alors par continuité de on a . Ensuite   Par unicité de la solution de telle que et , la fonction serait donc nulle sur . Ce qui contredit l'hypothèse faite sur .  Alors admet au plus un nombre fini de zéros dans .     Théorème de  Théorème principal   de séparation de Sturm   Soient et deux solutions non colinéaires de sur . On suppose que admet au moins deux zéros dans . Pour tout couple de zéros successifs de dans , il y a exactement un zéro de entre et .    Les zéros et étant successifs, ne s'annule pas sur l'intervalle . Elle y garde donc un signe constant. Quitte à remplacer par , on peut supposer que pour tout . Par ailleurs, ne peut s'annuler en ou en car sinon serait partout nulle donc   Soit le wronksien de et . On a   Comme ne s'annule pas sur , elle y garde un signe constant et donc . D'après le TVI , admet au moins un zéro dans . Ce zéro est nécessairement unique car sinon, le résultat qu'on vient de démontrer impliquera l'existence d'un zéro de dans .    On en déduit que si admet une solution non nulle qui admet une infinité de zéros dans alors c'est le cas pour toutes les solutions de .     Cas d'une équation normale    On considère dans la suite deux EDLS homogènes normales sur      Cas où la fonction est négative   Si sur et n'est identiquement nulle sur aucun segment de , alors toute solution non nulle de admet au plus un zéro dans .    Soit une solution non nulle de et supposons qu'elle admet au moins deux zéros dans . Soient et deux zéros consécutifs de . Si par exemple sur , alors et n'est partout nulle sur aucun un segment de . La fonction est donc strictement croissante sur . C'est impossible car on a forcément et .     Cas où la fonction est positive non intégrable    On suppose que l'intervalle est non majoré et que sur et n'est identiquement nulle sur aucun segment de . Soit . Si n'est pas intégrable sur , alors toute solution de admet une infinité de zéros dans .     Soit une solution non nulle de . Supposons que admet un nombre fini de zéros dans . Il existe donc tel que sur . Quitte à remplacer par , on peut supposer que sur .  Comme , alors est concave sur et donc pour tout , on a   Et on voit ainsi qu'il suffit qu'il existe tel que pour avoir , contredisant ainsi la stricte positivité de sur .  Introduisons maintenant la fonction définie pour tout par   est de classe sur et pour tout   Par suite   est positive non intégrable sur donc . Il existe donc tel que sur . On en déduit que sur tout entier. Ce qui achève la démonstration.      Théorème de comparaison de Sturm   On suppose que et n'est partout nulle sur aucun segment de . On suppose que admet une solution qui admet au moins deux zéros dans . Alors toute solution de admet au moins un zéro entre chaque deux zéros consécutifs de .    Soient deux zéros successifs de dans . Soit une solution de sur . Soit le wronksien croisé de et . Alors   Comme et , en intégrant cette relation entre et on obtient   Comme pour le résultat précédent, on peut supposer que sur , ce qui implique en outre que et . En analysant les signes des deux membres de l'égalité précédente on voit que ne peut garder un signe constant sur . Elle admet donc au moins un zéro dans .    On en déduit que si admet une solution non nulle qui possède une infinité de zéros dans alors c'est le cas de toutes les solutions de .   Un exemple intéressant   Soit . Considérons l' EDLS d'ordre à coefficients constants   Transformons la en une équation de Cauchy-Euler sur ( ) :   Et ramenons-nous à la forme normale de celle-ci sur ( ) :   ou encore, en posant ,   Au final on aurait effectué le changement mixte .  On en déduit les résultats suivants :    Si , les solutions de ont toutes une infinité de zéros dans .    Si , toute solution non nulle de admet au plus un zéro dans .      Toute solution de sur s'écrit sous la forme où est une solution de . Les zéros de dans sont donc les réels où est un zéro de dans .  Les solutions de sont de la forme si , si et si . D'où le résultat.     Cet exemple montre en particulier que l'hypothèse de non intégrabilité de dans n'est pas nécessaire pour que les solutions de l'équation normale admettent chacune une infinité de zéros.  Grâce au théorème de comparaison de Sturm, on en déduit aussi que si est non majoré alors    si au voisinage de , alors les solutions non nulles de ont chacune au plus un zéro dans .    s'il existe tel que au voisinage de , alors les solutions de ont chacune une infinité de zéros dans .       Cas d'une équation auto-adjointe et déductions sur le cas général   Supposons que l'équation est normalisée :   On la transforme en une équation normale en posant :   où est une solution de et . On la transforme aussi en une équation auto-adjointe :   où est une solution de et .  Si est une primitive de sur , on peut prendre   Puisque , alors les zéros de sont exactement ceux de et on pourrait donc exploiter les résultats énoncés pour les équations normales pour étudier les zéros des solutions de . L'inconvénient est que les propriétés de la fonction , son signe surtout, ne sont pas facilement déductibles de celles de et de . Par contre et ont les mêmes solutions, la fonction est strictement positive et la fonction a partout le même signe que la fonction . Avoir des résultats spécifiques aux équations auto-adjointes présente donc un avantage certain.    Théorème de Leighton   Soit . On suppose que est non majoré, que est positive non intégrable sur et que est non intégrable sur . Alors toutes les solutions de ont une infinité de zéros dans .  C'est une généralisation du théorème     Soit une solution de . Supposons par l'absurde qu'elle admet un nombre fini de zéros dans . Il existe alors tel que ne s'annule pas sur et on peut supposer que sur .  Comme pour le théorème on introduit la fonction , sur , définie par :   On a alors   Par suite   Puisque est non intégrable sur , alors et donc il existe tel que   Une situation à la Gromwall donc.  Si on pose maintenant , alors est une fonction strictement positive et on a pour tout :   et donc   par suite   Ce qui est impossible car cela impliquerait que la fonction est intégrable sur et donc sur . Ainsi admet une infinité de zéros dans .     On peut alléger les conditions sur en supposant que seulement, sans aucune obligation sur son signe.  et où est une primitive de sur . Les hypothèses du théorème sont donc immédiatement vérifiables sur les coefficients et de l'équation originale .      Solutions périodique d'une EDLS du second ordre périodique  Voir     "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-2",
  "type": "Objectifs",
  "number": "1.6",
  "title": "",
  "body": "  Ce chapitre propose une initiation à certaines thèmatiques liées aux EDL . Des notions qui sont abordées sous différentes formes dans les sujets de concours qui traitent des équations différentielles.  Les résultats sont exposés sous forme de cours (hors programme) et la plupart sont démontré dans les exercices proposés dans la subsection .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-3-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-3-2",
  "type": "Conventions et notations",
  "number": "1.41",
  "title": "",
  "body": "  et sont des applications continues définies sur à valeurs respectivement dans et dans . On considère les équations différentielles   "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-3-3",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-3-3",
  "type": "Remarque",
  "number": "1.42",
  "title": "",
  "body": " Les résultats de cette subsection sont traités dans les exercices et .  "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-3-4-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-3-4-2",
  "type": "Vocabulaire",
  "number": "1.43",
  "title": "",
  "body": " On appelle équation résolvante de , l'équation différentielle linéaire homogène du premier ordre   l'inconnue étant une fonction dérivable de dans .  "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-2",
  "type": "Conventions et notations",
  "number": "1.44",
  "title": "",
  "body": " Dans tout cette subsection, on se donne une EDLS d'ordre  et son équation homogène qu'on suppose normalisables sur l'intervalle , sauf mention explicite du contraire,   On suppose en outre que l'intervalle est ouvert.  "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-3-4",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-3-4",
  "type": "Théorème",
  "number": "1.45",
  "title": "Cas d’une équation normalisée.",
  "body": "Cas d'une équation normalisée   On suppose que l'équation est normalisée et que les fonctions et sont développables en séries entières en sur un intervalle . Alors toutes les solutions de sur sont développables en séries entières en sur .    Voir exercice    "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-3-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-3-5",
  "type": "Théorème",
  "number": "1.46",
  "title": "Cas d’une équation non normalisable.",
  "body": " Cas d'une équation non normalisable   Dans le cas où n'est pas normalisable en , si on peut la ramener à une équation de la forme   où et sont développables en séries entières en sur un intervalle , alors admet au moins une solution sur de la forme   où est une série entière de rayon de convergence et est une racine du polynôme   La fonction est dite une solution de Frobenius de et est dit polynôme initialisateur de .    Voir exercice .   "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-4-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-4-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-4-3-5-1-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-4-3-5-1-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-4-4-3-2-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-4-4-3-2-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-4-4-3-2-7",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-4-4-3-2-7",
  "type": "Démonstration",
  "number": "2.1",
  "title": "",
  "body": " Supposons pour l'instant que les fonctions et existent, on aura   D'un autre côté, si est une fonction de classe qui ne s'annule pas sur , alors   Il suffit donc de déterminer des fonctions , et telles que   Une condition nécessaire pour que de telles fonctions existent est que :   La fonction devrait donc être une solution de l' EDLS homogène d'ordre :   Maintenant si admet une solution qui ne s'annule pas sur , il suffit selon les relations ci-dessus de poser , et pour que soit équivalente à l'équation .  "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-4-5-5-3-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-4-5-5-3-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-4-5-5-3-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-4-5-5-3-5",
  "type": "Explication",
  "number": "3.1",
  "title": "",
  "body": " Fixons une fonction non nulle telle que et considérons une fonction de classe sur . Posons . Alors   "
},
{
  "id": "sec-eqdiff-equations-differentielles-themes-classiques-4-5-10",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-eqdiff-equations-differentielles-themes-classiques-4-5-10",
  "type": "Proposition",
  "number": "1.47",
  "title": "CNS d’existence et d’unicité.",
  "body": " CNS d'existence et d'unicité  Considérons un système fondamental de solutions de . Alors le problème aux limites admet une solution unique si et seulement si    Soit une solution particulière de et posons . On a alors   Ce dernier système d'équations, d'inconnues et , admet une solution unique si et seulement si .   "
},
{
  "id": "sec-zeros-des-solutions-2-1",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-zeros-des-solutions-2-1",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "sec-zeros-des-solutions-3-2-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-zeros-des-solutions-3-2-2",
  "type": "Proposition",
  "number": "1.48",
  "title": "",
  "body": "  Deux solutions de qui ont un zéro en commun sont nécessairement colinéaires.    Si et sont deux solutions de sur qui ont un zéro en commun et est leur wronksien, alors et donc et sont colinéaires.   "
},
{
  "id": "prop-nbrzerosfini",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#prop-nbrzerosfini",
  "type": "Proposition",
  "number": "1.49",
  "title": "",
  "body": "  Soit une solution non nulle de sur . Alors elle admet au plus un nombre fini de zéros dans chaque segment de .    Soit un segment . Supposons par l'absurde que admet une infinité de zéros dans et considérons une suite injective dont tous les termes sont des zéros de dans . étant un segment, admet une suite extraite qui converge, on peut donc supposer que elle-même converge. Soit sa limite. Puisque pour tout , alors par continuité de on a . Ensuite   Par unicité de la solution de telle que et , la fonction serait donc nulle sur . Ce qui contredit l'hypothèse faite sur .  Alors admet au plus un nombre fini de zéros dans .   "
},
{
  "id": "sec-zeros-des-solutions-3-4-2",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#sec-zeros-des-solutions-3-4-2",
  "type": "Théorème",
  "number": "1.50",
  "title": "de séparation de Sturm.",
  "body": " de séparation de Sturm   Soient et deux solutions non colinéaires de sur . On suppose que admet au moins deux zéros dans . Pour tout couple de zéros successifs de dans , il y a exactement un zéro de entre et .    Les zéros et étant successifs, ne s'annule pas sur l'intervalle . Elle y garde donc un signe constant. Quitte à remplacer par , on peut supposer que pour tout . Par ailleurs, ne peut s'annuler en ou en car sinon serait partout nulle donc   Soit le wronksien de et . On a   Comme ne s'annule pas sur , elle y garde un signe constant et donc . D'après le TVI , admet au moins un zéro dans . Ce zéro est nécessairement unique car sinon, le résultat qu'on vient de démontrer impliquera l'existence d'un zéro de dans .   "
},
{
  "id": "subsubsec-equations-normales-2-1",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#subsubsec-equations-normales-2-1",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "prop-qneg",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#prop-qneg",
  "type": "Proposition",
  "number": "1.51",
  "title": "Cas où la fonction <span class=\"process-math\">\\(q\\)<\/span> est négative.",
  "body": " Cas où la fonction est négative   Si sur et n'est identiquement nulle sur aucun segment de , alors toute solution non nulle de admet au plus un zéro dans .    Soit une solution non nulle de et supposons qu'elle admet au moins deux zéros dans . Soient et deux zéros consécutifs de . Si par exemple sur , alors et n'est partout nulle sur aucun un segment de . La fonction est donc strictement croissante sur . C'est impossible car on a forcément et .   "
},
{
  "id": "prop-qpos",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#prop-qpos",
  "type": "Proposition",
  "number": "1.52",
  "title": "Cas où la fonction <span class=\"process-math\">\\(p\\)<\/span> est positive non intégrable.",
  "body": " Cas où la fonction est positive non intégrable    On suppose que l'intervalle est non majoré et que sur et n'est identiquement nulle sur aucun segment de . Soit . Si n'est pas intégrable sur , alors toute solution de admet une infinité de zéros dans .     Soit une solution non nulle de . Supposons que admet un nombre fini de zéros dans . Il existe donc tel que sur . Quitte à remplacer par , on peut supposer que sur .  Comme , alors est concave sur et donc pour tout , on a   Et on voit ainsi qu'il suffit qu'il existe tel que pour avoir , contredisant ainsi la stricte positivité de sur .  Introduisons maintenant la fonction définie pour tout par   est de classe sur et pour tout   Par suite   est positive non intégrable sur donc . Il existe donc tel que sur . On en déduit que sur tout entier. Ce qui achève la démonstration.   "
},
{
  "id": "subsubsec-equations-normales-5",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#subsubsec-equations-normales-5",
  "type": "Théorème",
  "number": "1.53",
  "title": "Théorème de comparaison de Sturm.",
  "body": " Théorème de comparaison de Sturm   On suppose que et n'est partout nulle sur aucun segment de . On suppose que admet une solution qui admet au moins deux zéros dans . Alors toute solution de admet au moins un zéro entre chaque deux zéros consécutifs de .    Soient deux zéros successifs de dans . Soit une solution de sur . Soit le wronksien croisé de et . Alors   Comme et , en intégrant cette relation entre et on obtient   Comme pour le résultat précédent, on peut supposer que sur , ce qui implique en outre que et . En analysant les signes des deux membres de l'égalité précédente on voit que ne peut garder un signe constant sur . Elle admet donc au moins un zéro dans .   "
},
{
  "id": "subsubsec-equations-normales-7",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#subsubsec-equations-normales-7",
  "type": "Exemple",
  "number": "1.54",
  "title": "Un exemple intéressant.",
  "body": " Un exemple intéressant   Soit . Considérons l' EDLS d'ordre à coefficients constants   Transformons la en une équation de Cauchy-Euler sur ( ) :   Et ramenons-nous à la forme normale de celle-ci sur ( ) :   ou encore, en posant ,   Au final on aurait effectué le changement mixte .  On en déduit les résultats suivants :    Si , les solutions de ont toutes une infinité de zéros dans .    Si , toute solution non nulle de admet au plus un zéro dans .      Toute solution de sur s'écrit sous la forme où est une solution de . Les zéros de dans sont donc les réels où est un zéro de dans .  Les solutions de sont de la forme si , si et si . D'où le résultat.   "
},
{
  "id": "subsubsec-equations-normales-8",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#subsubsec-equations-normales-8",
  "type": "Remarque",
  "number": "1.55",
  "title": "",
  "body": " Cet exemple montre en particulier que l'hypothèse de non intégrabilité de dans n'est pas nécessaire pour que les solutions de l'équation normale admettent chacune une infinité de zéros.  Grâce au théorème de comparaison de Sturm, on en déduit aussi que si est non majoré alors    si au voisinage de , alors les solutions non nulles de ont chacune au plus un zéro dans .    s'il existe tel que au voisinage de , alors les solutions de ont chacune une infinité de zéros dans .    "
},
{
  "id": "thm-leigh",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#thm-leigh",
  "type": "Théorème",
  "number": "1.56",
  "title": "Théorème de Leighton.",
  "body": " Théorème de Leighton   Soit . On suppose que est non majoré, que est positive non intégrable sur et que est non intégrable sur . Alors toutes les solutions de ont une infinité de zéros dans .  C'est une généralisation du théorème     Soit une solution de . Supposons par l'absurde qu'elle admet un nombre fini de zéros dans . Il existe alors tel que ne s'annule pas sur et on peut supposer que sur .  Comme pour le théorème on introduit la fonction , sur , définie par :   On a alors   Par suite   Puisque est non intégrable sur , alors et donc il existe tel que   Une situation à la Gromwall donc.  Si on pose maintenant , alors est une fonction strictement positive et on a pour tout :   et donc   par suite   Ce qui est impossible car cela impliquerait que la fonction est intégrable sur et donc sur . Ainsi admet une infinité de zéros dans .   "
},
{
  "id": "subsubsec--4",
  "level": "2",
  "url": "sec-eqdiff-equations-differentielles-themes-classiques.html#subsubsec--4",
  "type": "Remarque",
  "number": "1.57",
  "title": "",
  "body": " On peut alléger les conditions sur en supposant que seulement, sans aucune obligation sur son signe.  et où est une primitive de sur . Les hypothèses du théorème sont donc immédiatement vérifiables sur les coefficients et de l'équation originale .  "
},
{
  "id": "sec-generalites",
  "level": "1",
  "url": "sec-generalites.html",
  "type": "Section",
  "number": "2.1",
  "title": "Espaces de probabilité",
  "body": " Espaces de probabilité   Dans tout le chapitre désignera un ensemble non vide. est une ensemble non vide qui sera souvent utilisé comme ensemble d'indices.  On notera , resp. , l'ensemble de toutes les parties de , resp. l'ensemble de toutes les parties finies de .  Si est une partie de on notera son complémentaire dans .    Tribus    On appelle tribu (ou -algèbre) de tout ensemble de parties de tel que :   ;  si alors ;  si est une suite d'éléments de alors ;  Si est une tribu de alors le couple est dit un espace probabilisable. Tout élément de est dit un événement de l'espace .     Si est une tribu de alors    ;    si est une suite d'éléments de alors .           est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .         tribu engéndrée par      Si est une famille quelconque de tribus de alors est une tribu de .    Soit un ensemble de parties de . L'intersection de toutes les tribus de contenant est une tribu de . Elle est appelée la tribu engendrée par . On la note .       Tribue de Borel de    tribu de Borel de    La tribu engendrée par l'ensemble des segments de est appelée la tribu de Borel de et tout élément de cette tribu est dit un borélien de On la note .        Soient et deux ensembles de parties de . Si alors .    Tout intervalle de peut être écrit comme la réunion d'une suite de segments. Donc tout intervalle de est un borélien.  Tout ouvert de est une réunion au plus dénombrable d'intervalles ouverts ses composantes connexes par arcs par exemple . Donc tout ouvert de et un borélien et par stabilité d'une tribu par complémentarité, tout fermé de est un borélien.    En général si est un espace vectoriel normé de dimension finie alors la tribu de Borel de , notée est par définition la tribu engendrée par les boules fermées de . Elle contient alors tous les ouverts et tous les fermés de et est de ce fait indépendante de la norme choisie sur .       Il n'y a aucun critère gloal qui reste simple permettant de décider si une partie de est un borélien. Cela peut même être un problème très compliqué.   Un cas intéressant   Soit un ensemble au plus dénombrable de parties de qui forment une partition de . Alors     Posons et montrons que est une tribu de .   Comme alors .    Si alors .    Soit est une suite d'éléments de et posons pour tout , alors .    est donc bien une tribu de . Elle contient et toute tribu qui contient tous les ensembles contient tous les éléments de . C'est donc la plus petite tribu de contenant . Soit .      Si l'ensemble est au plus dénombrable alors Autrement dit la seule tribu de qui contient tous les singletons de est .       Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).    La permet de construire de manière simple une tribu de en partant d'une famille au plus dénombrable d'événement deux à deux disjoints. Cette tribu est d'autant plus intéressante qu'il est très simple d'y construire une probabilité (voir la remarque ).      tribu induite   Soit une tribu de . Pour toute élément de , l'ensemble est une tribu de . On l'appelle la tribu induite par sur .      Probabilités   Dans toute cette subsection, désignera un espace probabilisable.      probabilité de l'événement    On appelle probabilité de l'espace toute application telle que :    ;    si est une suite d'éléments de deux à deux disjoints alors .   Si est un probabilité de alors le triplet est dit un espace probabilisé.     Expérimentalement, est une approximation de la fréquence de réalisation de l'événement quand on répète l'expérience un grand nombre de fois :  étant le nombre de fois où l'événement se réalise quand on répète l'expérience aléatoire fois, pour très grand.    Dans la définition précédente, on a utilisé la notation pour désigner la somme de la série que celle-ci soit convergente ou non avec la convention que la somme d'une série divergente à termes positifs est . Ce qui pose évidemment un problème de consistence puisque est sensé être dans l'intervalle .  En fait avec les deux axiomes de la définition, la famille est toujours sommable et sa somme est dans . Voilà comment le justifier :   En posant pour tout , le deuxième axiome aboutit à .    Si sont des événements deux à deux disjoints en posant pour tout , le deuxième axiome fournit .    Soit une suite d'éléments de deux à deux disjoints. On a alors pour tout  La série à termes réels positifs est donc convergente et sa somme est dans .        Soit une probabilité sur . Alors :    ;     pour tout ;    Si alors et pour tout ;     pour tout ;     pour toute suite d'éléments de .     si est une famille au plus dénombrable d'éléments deux à deux disjoints de .       Les propriétés 1, 2 et 3 sont des conséquences immédiates des axiomes de la définition de probabilité et de la remarque précédente.   Soit une suite d'éléments de et posons et pour tout . Les sont deux à deux disjoints et avec pour tout . On a donc .    Soit une famille au plus dénombrable d'éléments de deux à deux disjoints. Si est fini alors c'est une conséquance de la remarque précédente. Si est infini alors il existe une bijection entre et et il suffit de poser pour tout pour conclure grâce au théorème de permutation des termes pour les familles sommables.        de continuité monotone      Soit une suite croissante d'éléments de . Alors .    Soit une suite décroissante d'éléments de . Alors .          On pose et pour tout . Les événements sont deux à deux disjoints et . On a donc     On suppose que est décroissante. Alors est croissante et on peut ainsi écrire          Soit une suite quelconque d'éléments de . Alors            Pour le premier point on pose pour tout .La suite et croissante et . On applique alors la formule des probabilites continues.  Pour le second on pose . La suite est décroissante et on peut appliquer le théorème de continuité monotone sachant que .      On appelle système complet d'événements (SCE) de toute famille au plus dénombrables d'éléments qui forme une partition de .     exemples courants de SCE      Pour tout événement , est un SCE de .    Si est au plus dénombrable, alors est un SCE de .    SCE généré par une variable aléatoire discrète (important)  si est une application définie sur telle que soit au plus dénombrable et pour tout alors est un SCE de .        Formule des probabilités totales   Soit un SCE de . Alors pour tout , on a         Ce résultat reste valable si les événements sont deux à deux disjoints, sans former une partition de , à condition que   Car si on pose alors et donc . Par suite et donc     Cette formule est extrêmement utile. Elle stipule que si on sait calculer les probabilités des événements d'un SCE alors on peut exprimer la probabilité de n'importe quel événement.    Reprenons le contexte de la et considérons une famille de nombre réel positifs dont la somme vaut . Alors on définit complétement une probabilité sur l'espace en posant On a alors pour tout    Le énoncé ci-après n'est qu'un cas particulier de ce dernier résultat.       exemples génériques d'utilisation de la formule des probabilités totales     si on fixe un événement alors     Si sont des événements quelconques alors    Ces relations serviront notamment dans l'étude des événements indépendants ( )     On suppose que est au plus dénombrable et on le munit de la tribu .   Soit une probabilité de . Pour tout , on a  est entièrement détérminée par les probabilités des singletons .    Soit une famille de nombres réels positifs de somme . Alors il existe une unique probabilité sur telle que         Si est au plus dénombrable alors pour toute famille sommable de nombre réels positifs de somme , on peut définir une probabilté sur en posant Cette remarque peut avoir des applications analytiques intéressantes même dans des cas où la probabilité ne correspond pas réellement à une expérience aléatoire.    Probabilité conditionnelle    probabilité de sachant     probabilité de sachant    On considère un événemnt de probabilité non nulle. L'application définie sur par est une probabilité de . La probabilité est aussi notée et on l'appelle probailité de sachant .    On a bien et pour toute suite d'éléments de deux à deux disjoints, on a     Justification de la définition  la probabilité de « sachant » est la probabilité de réalisation d'un résultat favorable à quand on ne retient que les résultats favorables à . C'est une approximation du rapport des fréquences de réalisation des événements et dans une série d'expériences. . D'où la définition         Si alors par convention, pour tout , . Ce choix s'explique par le fait que tout se passe comme si l'événement n'avait pas eu lieu.  Avec cette convention on peut toujours écrire     Sachant que est une probabilité on peut lui appliquer toutes propriétés vues précédemment. Par exemple        On parle de «probabilité de sachant », jamais de «l'événement» qui n'a pas de sens en théorie des probabilités.     Soit un SCE de . Alors      Formules de Bayes      Soient et deux événements de probabilités non nulles. Alors     Soit un SCE de et un événement de probabilité non nulle. Alors pour tout , on a         générique d'utilisation de la formule de Bayes  Une chaine de production industrielle contient machines identiques mais avec des taux de production de pièces défectueuses différents. Le taux pour la machine numéro est .  On prélève une pièce au hasard parmi un lot de pièces produite par la chaîne et on constate qu'elle est défectueuse. Quelle est la probabilité que cette pièce provienne de la machine numéro ?   Si on note l'événement «la pièce est défectueuse» et l'événement «la pièce provient de la machine numéro » alors on cherche . Celle-ci est donnée par la formule de Bayes : car et pour tout .      Indépendance des événements   Dans tout la suite, désignera un espace probabilisé.        Deux événements et de sont dits indépendants si .    Une famille d'événements de est dite mutuellement indépendante (MI) si pour toute partie finie de ,            Indépendance de deux événements   est indépendant de si la probabilité de réalisation de sachant est la même que celle de réalisation de : . Ce qui revient à     Indépendance mutuelle  Des évéments , sont mutuelement indépendants si et seulement si pour tout et pour toute partie finie ne contenant pas on a c'est à dire si et seulement si la réalisation de chaque événement est indépendante de la réalisation simultanée d'un ou plusieurs évenements lorsque .          Si ou alors tout événement est indépendant de .    deux événements incompatibles et ne peuvent être indépendants que si ou .    Si est une famille MI alors est MI pour toute partie de . En particulier les événements sont deux à deux indépendants.    Soit est une famille d'évéments MI. Si on lui ajoute des événements presques sûrs ou négligeable alors les événements de la nouvelle famille sont MI.    Dans un SCE les événements ne peuvent être deux à deux indépendants, et a fortiori MI, que s'il existe tel que .        Si et sont des événements indépendants alors et sont indépendants, et sont indépendants et et sont indépendants.      Soit une famille MI d'événements de .   Soit une partie de . On pose si et si . Alors la famille est MI (en particulier est MI).    Lemme des coalitions  Soit une famille de parties deux à deux disjointes de . On pose pour tout , . Alors la famille est MI.        Formule des compléments   Soient des événements de . Alors     On écrit et on raisonne par récurrnece en appliquant l'hypothèse de récurrence avec la probailité       Modélisation de phénomènes aléatoires  Pour modéliser une expérience aléatoire on se place dans un ensemble qui contient tous les résultats possibles de l'expérience et on choisi une tribu de dans laquelle on peut exprimer tous les «événements» qui nous intéressent. Il reste ensuite à définir une probabilité sur cette tribu qui rend compte de la fréquence de réalisation de ces événements.  On adopte alors le vocabulaire suivant :    est dit l'univers de l'expérience ;    pour une instance de l'expérience, un évenement se réalise si le résultat obtenu est dans ;    un événement est dit presque sûr si et négligeable si ;    deux événements et sont dits incompatibles si ;      signification de certains événements courants  Soit une suite quelconque d'événements.    est l'événement «au moins un des événements se réalise» ;     est l'événement «tous les événements se réalisent» ;     est l'événement «les événements se réalisent tous à partir d'un certain rang pour pour au moins un indice ». La probabilité de cet événement est      est l'événement «l'événement se réalise pour une infinité d'indices ». La probabilité de cet événement est       Deux approches sont en fait possibles pour modéliser une expérience aléatoire :   Définir un espace où représente exactement l'ensemble des résultats possibles de l'expérience.    La précédente méthode risque d'être inadéquate si certains événements qui nous intéresse sont inexprimables dans la tribu considérée. C'est pour cela qu'en général on préfère se placer dans un espace probabilisable où est beaucoup plus large et on modélise l'expérience non pas avec mais avec une application définie sur qu'on appellera «variable aléatoire». L'avantage est qu'on peut combiner entre les résultats de différentes expériences aléatoires.      Cas où l'univers est au plus dénombrable  Dans la pratique si l'ensemble qui contient les résultats de l'expérience est au plus plus dénombrable alors on le munit de la tribu de telle sorte que tout ensemble formé de résultats possibles de l'expérience soit un événement. Ce choix de tribu n'est pas adéquat lorsque l'ensemble des résultats est non dénombrable car cela pose des difficultés insurmontables pour définir une probabilité sur .    Lancer un dé  On lance un dé à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .    Lancer deux dés  On lance deux dés à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Si on s'intéresse à l'événement : «la somme des résultats est paire», on peut créer un espace spécifique sous la forme et y adjoindre la probabilité adéquate ou bien on peut rester dans l'univers et définir la variable aléatoire sur en posant pour tout . On peut alors exprimer l'événement par     Suite de lancers d'une pièce de monnaie  On lance indéfiniment une piece de monnaie. Si on ne s'intéresse qu'au numéro du premier lancer qui donne «face» alors peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Mais dans ce cas les événements «obtenir trois face successivement au moins une fois» ou «obtenir face une infinité de fois» ne peuvent être exprimés dans .  On peut alors se placer dans l'espace beaucoup plus vaste . Le résultat de chaque séquence infinie de lancers est modélisé par une suite de zéros et de uns. C'est un ensemble non dénombrable et y définir une tribu sur laquelle on doit ensuite définir une probabilité est non aisé. L'approche peut être la suivante : on identifie une famille d'événements élémentaires avec lesquels on peut construire d'autre événements plus complexes et qui couvrent nos besoins et on n'aura qu'à se placer dans la tribu engendrée par ces événements élémentaires.  Par exemple, on peut considérer pour tout l'événement : «le lancer donne face», ou encore On peut alors exprimer   pour tout  en particulier est l'événement «ne jamais obtenir face»    l'événement «le premier face apparaît au lancer» par     l'événement «obtenir face une infinité de fois» par .    l'événement «obtenir trois faces successivement une infinité de fois» par         Activités    On lance indéfiniment une piece de monnaie non équilibrée. La probabilité d'obtenir face est et les lancers sont indépendants.     Quelle est la probabilité pour que le numéro du premier lancer qui donne face soit pair ? Dans quel cas cette probabilité est-elle égale à celle que le numéro du premier face soit impaire ?    On note cet événement et l'événement «le numéro du premier lancer qui donne face est ». Alors , réunion d'événements deux à deux disjoints. On a donc Par ailleur si et seulement si . Ce qui équivaut à ou encore à .  On constate qu'en général sans jamais toucher ces valeurs extrêmes lorsque varie dans . La probabilité que le premier face ait un numéro impaire est toujours plus grande que celle que ce numéro soit paire et on n'approche d'un équilibre des deux probabilités que si est presque nul, c'est à dire quand il est presque impossible d'obtenir face.  C'est un comportement contre-intuitif. L'intuition pousse plutôt vers sous pretexte qu'il y a «autant de nombres paires que de nombres impaires».      Quelle est la probabilité pour que les numéros de tous les lancers qui donnent face soient pairs ?    Une première méthode  On note l'evénement «tous les lancers qui donnent face sont pairs» et pour tout , l'événement «jusqu'au lancer , tous les lancers qui ont donné face sont de numéro paire». Alors la suite et décroissante donc . Selon la formule des probabilités totales la probabilité conditionnelle étant clairement nulle. Or si on sait que tout les lancers jusqu'à l'instant qui ont donné face sont de numéro paire, alors pour que se réalise il faut et il suffit que le lancer ne donne pas face, peut importe ce que donne le lancer . Donc et ainsi  suit une progression géométrique de raison donc elle converge vers . Alors .  Autre méthode Il suffit de remarquer qu'en fait et que les événements sont mutuellement indépendants et donc       Calcul de l'ndicatrice d'Euler   On fixe un entier et on note ses diviseurs premiers. On pose et pour tout diviseur de  On munit de la probabilité uniforme .    Calculer .     Montrer que les événements sont mutuellement indépendants.    Juste pour le test du formatage de la reponse      Retrouver la formule     Juste pour le test du formatage      Formule de Weierstrass   On fixe un réel . On note le nombre premier par ordre croissant et on définit la probabilité sur par On note pour tout , l'ensemble des multiple de .   Justifier que définit bien une probabilité sur .    Calculer pour tout     Montrer que les événements sont mutuellement indépendants.    En déduire que         "
},
{
  "id": "def-tribu",
  "level": "2",
  "url": "sec-generalites.html#def-tribu",
  "type": "Définition",
  "number": "2.1",
  "title": "",
  "body": "  On appelle tribu (ou -algèbre) de tout ensemble de parties de tel que :   ;  si alors ;  si est une suite d'éléments de alors ;  Si est une tribu de alors le couple est dit un espace probabilisable. Tout élément de est dit un événement de l'espace .   "
},
{
  "id": "subsec-tribu-3",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-3",
  "type": "Remarque",
  "number": "2.2",
  "title": "",
  "body": " Si est une tribu de alors    ;    si est une suite d'éléments de alors .     "
},
{
  "id": "subsec-tribu-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-4",
  "type": "Exemple",
  "number": "2.3",
  "title": "",
  "body": "     est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .     "
},
{
  "id": "subsec-tribu-5",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-5",
  "type": "Proposition",
  "number": "2.4",
  "title": "",
  "body": "   tribu engéndrée par      Si est une famille quelconque de tribus de alors est une tribu de .    Soit un ensemble de parties de . L'intersection de toutes les tribus de contenant est une tribu de . Elle est appelée la tribu engendrée par . On la note .     "
},
{
  "id": "def-tborel",
  "level": "2",
  "url": "sec-generalites.html#def-tborel",
  "type": "Définition",
  "number": "2.5",
  "title": "Tribue de Borel de <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Tribue de Borel de    tribu de Borel de    La tribu engendrée par l'ensemble des segments de est appelée la tribu de Borel de et tout élément de cette tribu est dit un borélien de On la note .   "
},
{
  "id": "subsec-tribu-7",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-7",
  "type": "Remarque",
  "number": "2.6",
  "title": "",
  "body": "    Soient et deux ensembles de parties de . Si alors .    Tout intervalle de peut être écrit comme la réunion d'une suite de segments. Donc tout intervalle de est un borélien.  Tout ouvert de est une réunion au plus dénombrable d'intervalles ouverts ses composantes connexes par arcs par exemple . Donc tout ouvert de et un borélien et par stabilité d'une tribu par complémentarité, tout fermé de est un borélien.    En général si est un espace vectoriel normé de dimension finie alors la tribu de Borel de , notée est par définition la tribu engendrée par les boules fermées de . Elle contient alors tous les ouverts et tous les fermés de et est de ce fait indépendante de la norme choisie sur .     "
},
{
  "id": "subsec-tribu-8",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-8",
  "type": "Mise en garde",
  "number": "2.7",
  "title": "",
  "body": " Il n'y a aucun critère gloal qui reste simple permettant de décider si une partie de est un borélien. Cela peut même être un problème très compliqué.  "
},
{
  "id": "prop-sigmatrib",
  "level": "2",
  "url": "sec-generalites.html#prop-sigmatrib",
  "type": "Proposition",
  "number": "2.8",
  "title": "Un cas intéressant.",
  "body": "Un cas intéressant   Soit un ensemble au plus dénombrable de parties de qui forment une partition de . Alors     Posons et montrons que est une tribu de .   Comme alors .    Si alors .    Soit est une suite d'éléments de et posons pour tout , alors .    est donc bien une tribu de . Elle contient et toute tribu qui contient tous les ensembles contient tous les éléments de . C'est donc la plus petite tribu de contenant . Soit .   "
},
{
  "id": "prop-tribdisc",
  "level": "2",
  "url": "sec-generalites.html#prop-tribdisc",
  "type": "Corollaire",
  "number": "2.9",
  "title": "",
  "body": "  Si l'ensemble est au plus dénombrable alors Autrement dit la seule tribu de qui contient tous les singletons de est .   "
},
{
  "id": "subsec-tribu-11",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-11",
  "type": "Remarque",
  "number": "2.10",
  "title": "",
  "body": "   Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).    La permet de construire de manière simple une tribu de en partant d'une famille au plus dénombrable d'événement deux à deux disjoints. Cette tribu est d'autant plus intéressante qu'il est très simple d'y construire une probabilité (voir la remarque ).    "
},
{
  "id": "subsec-tribu-12",
  "level": "2",
  "url": "sec-generalites.html#subsec-tribu-12",
  "type": "Proposition",
  "number": "2.11",
  "title": "tribu induite.",
  "body": " tribu induite   Soit une tribu de . Pour toute élément de , l'ensemble est une tribu de . On l'appelle la tribu induite par sur .   "
},
{
  "id": "subsec-probabilite-2",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-2",
  "type": "Notations",
  "number": "2.12",
  "title": "",
  "body": " Dans toute cette subsection, désignera un espace probabilisable.  "
},
{
  "id": "def-probabilite",
  "level": "2",
  "url": "sec-generalites.html#def-probabilite",
  "type": "Définition",
  "number": "2.13",
  "title": "",
  "body": "   probabilité de l'événement    On appelle probabilité de l'espace toute application telle que :    ;    si est une suite d'éléments de deux à deux disjoints alors .   Si est un probabilité de alors le triplet est dit un espace probabilisé.   "
},
{
  "id": "subsec-probabilite-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-4",
  "type": "Explication",
  "number": "2.1.2.1",
  "title": "",
  "body": " Expérimentalement, est une approximation de la fréquence de réalisation de l'événement quand on répète l'expérience un grand nombre de fois :  étant le nombre de fois où l'événement se réalise quand on répète l'expérience aléatoire fois, pour très grand.  "
},
{
  "id": "subsec-probabilite-5",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-5",
  "type": "Remarque",
  "number": "2.14",
  "title": "",
  "body": " Dans la définition précédente, on a utilisé la notation pour désigner la somme de la série que celle-ci soit convergente ou non avec la convention que la somme d'une série divergente à termes positifs est . Ce qui pose évidemment un problème de consistence puisque est sensé être dans l'intervalle .  En fait avec les deux axiomes de la définition, la famille est toujours sommable et sa somme est dans . Voilà comment le justifier :   En posant pour tout , le deuxième axiome aboutit à .    Si sont des événements deux à deux disjoints en posant pour tout , le deuxième axiome fournit .    Soit une suite d'éléments de deux à deux disjoints. On a alors pour tout  La série à termes réels positifs est donc convergente et sa somme est dans .     "
},
{
  "id": "subsec-probabilite-6",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-6",
  "type": "Proposition",
  "number": "2.15",
  "title": "",
  "body": "  Soit une probabilité sur . Alors :    ;     pour tout ;    Si alors et pour tout ;     pour tout ;     pour toute suite d'éléments de .     si est une famille au plus dénombrable d'éléments deux à deux disjoints de .       Les propriétés 1, 2 et 3 sont des conséquences immédiates des axiomes de la définition de probabilité et de la remarque précédente.   Soit une suite d'éléments de et posons et pour tout . Les sont deux à deux disjoints et avec pour tout . On a donc .    Soit une famille au plus dénombrable d'éléments de deux à deux disjoints. Si est fini alors c'est une conséquance de la remarque précédente. Si est infini alors il existe une bijection entre et et il suffit de poser pour tout pour conclure grâce au théorème de permutation des termes pour les familles sommables.      "
},
{
  "id": "thm-contmono",
  "level": "2",
  "url": "sec-generalites.html#thm-contmono",
  "type": "Théorème",
  "number": "2.16",
  "title": "de continuité monotone.",
  "body": " de continuité monotone      Soit une suite croissante d'éléments de . Alors .    Soit une suite décroissante d'éléments de . Alors .          On pose et pour tout . Les événements sont deux à deux disjoints et . On a donc     On suppose que est décroissante. Alors est croissante et on peut ainsi écrire       "
},
{
  "id": "cor-contmono",
  "level": "2",
  "url": "sec-generalites.html#cor-contmono",
  "type": "Corollaire",
  "number": "2.17",
  "title": "",
  "body": "  Soit une suite quelconque d'éléments de . Alors            Pour le premier point on pose pour tout .La suite et croissante et . On applique alors la formule des probabilites continues.  Pour le second on pose . La suite est décroissante et on peut appliquer le théorème de continuité monotone sachant que .   "
},
{
  "id": "def-sce",
  "level": "2",
  "url": "sec-generalites.html#def-sce",
  "type": "Définition",
  "number": "2.18",
  "title": "",
  "body": "  On appelle système complet d'événements (SCE) de toute famille au plus dénombrables d'éléments qui forme une partition de .   "
},
{
  "id": "subsec-probabilite-10",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-10",
  "type": "Exemple",
  "number": "2.19",
  "title": "exemples courants de SCE.",
  "body": " exemples courants de SCE      Pour tout événement , est un SCE de .    Si est au plus dénombrable, alors est un SCE de .    SCE généré par une variable aléatoire discrète (important)  si est une application définie sur telle que soit au plus dénombrable et pour tout alors est un SCE de .      "
},
{
  "id": "prop-probatotale",
  "level": "2",
  "url": "sec-generalites.html#prop-probatotale",
  "type": "Théorème",
  "number": "2.20",
  "title": "Formule des probabilités totales.",
  "body": " Formule des probabilités totales   Soit un SCE de . Alors pour tout , on a    "
},
{
  "id": "subsec-probabilite-12",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-12",
  "type": "Remarque",
  "number": "2.21",
  "title": "",
  "body": "    Ce résultat reste valable si les événements sont deux à deux disjoints, sans former une partition de , à condition que   Car si on pose alors et donc . Par suite et donc     Cette formule est extrêmement utile. Elle stipule que si on sait calculer les probabilités des événements d'un SCE alors on peut exprimer la probabilité de n'importe quel événement.    Reprenons le contexte de la et considérons une famille de nombre réel positifs dont la somme vaut . Alors on définit complétement une probabilité sur l'espace en posant On a alors pour tout    Le énoncé ci-après n'est qu'un cas particulier de ce dernier résultat.     "
},
{
  "id": "subsec-probabilite-13",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-13",
  "type": "Exemple",
  "number": "2.22",
  "title": "exemples génériques d’utilisation de la formule des probabilités totales.",
  "body": " exemples génériques d'utilisation de la formule des probabilités totales     si on fixe un événement alors     Si sont des événements quelconques alors    Ces relations serviront notamment dans l'étude des événements indépendants ( )  "
},
{
  "id": "thm-probadisc",
  "level": "2",
  "url": "sec-generalites.html#thm-probadisc",
  "type": "Théorème",
  "number": "2.23",
  "title": "",
  "body": "  On suppose que est au plus dénombrable et on le munit de la tribu .   Soit une probabilité de . Pour tout , on a  est entièrement détérminée par les probabilités des singletons .    Soit une famille de nombres réels positifs de somme . Alors il existe une unique probabilité sur telle que       "
},
{
  "id": "subsec-probabilite-15",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-15",
  "type": "Remarque",
  "number": "2.24",
  "title": "",
  "body": " Si est au plus dénombrable alors pour toute famille sommable de nombre réels positifs de somme , on peut définir une probabilté sur en posant Cette remarque peut avoir des applications analytiques intéressantes même dans des cas où la probabilité ne correspond pas réellement à une expérience aléatoire.  "
},
{
  "id": "prop-probcond",
  "level": "2",
  "url": "sec-generalites.html#prop-probcond",
  "type": "Proposition",
  "number": "2.25",
  "title": "Probabilité conditionnelle.",
  "body": " Probabilité conditionnelle    probabilité de sachant     probabilité de sachant    On considère un événemnt de probabilité non nulle. L'application définie sur par est une probabilité de . La probabilité est aussi notée et on l'appelle probailité de sachant .    On a bien et pour toute suite d'éléments de deux à deux disjoints, on a     Justification de la définition  la probabilité de « sachant » est la probabilité de réalisation d'un résultat favorable à quand on ne retient que les résultats favorables à . C'est une approximation du rapport des fréquences de réalisation des événements et dans une série d'expériences. . D'où la définition    "
},
{
  "id": "subsec-probabilite-17",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-17",
  "type": "Remarque",
  "number": "2.26",
  "title": "",
  "body": "    Si alors par convention, pour tout , . Ce choix s'explique par le fait que tout se passe comme si l'événement n'avait pas eu lieu.  Avec cette convention on peut toujours écrire     Sachant que est une probabilité on peut lui appliquer toutes propriétés vues précédemment. Par exemple      "
},
{
  "id": "subsec-probabilite-18",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-18",
  "type": "Mise en garde",
  "number": "2.27",
  "title": "",
  "body": " On parle de «probabilité de sachant », jamais de «l'événement» qui n'a pas de sens en théorie des probabilités.  "
},
{
  "id": "thm-probatotale2",
  "level": "2",
  "url": "sec-generalites.html#thm-probatotale2",
  "type": "Théorème",
  "number": "2.28",
  "title": "",
  "body": "  Soit un SCE de . Alors    "
},
{
  "id": "prop-bayes",
  "level": "2",
  "url": "sec-generalites.html#prop-bayes",
  "type": "Proposition",
  "number": "2.29",
  "title": "Formules de Bayes.",
  "body": " Formules de Bayes      Soient et deux événements de probabilités non nulles. Alors     Soit un SCE de et un événement de probabilité non nulle. Alors pour tout , on a       "
},
{
  "id": "subsec-probabilite-21",
  "level": "2",
  "url": "sec-generalites.html#subsec-probabilite-21",
  "type": "Exemple",
  "number": "2.30",
  "title": "générique d’utilisation de la formule de Bayes.",
  "body": " générique d'utilisation de la formule de Bayes  Une chaine de production industrielle contient machines identiques mais avec des taux de production de pièces défectueuses différents. Le taux pour la machine numéro est .  On prélève une pièce au hasard parmi un lot de pièces produite par la chaîne et on constate qu'elle est défectueuse. Quelle est la probabilité que cette pièce provienne de la machine numéro ?   Si on note l'événement «la pièce est défectueuse» et l'événement «la pièce provient de la machine numéro » alors on cherche . Celle-ci est donnée par la formule de Bayes : car et pour tout .   "
},
{
  "id": "subsec-independance-2",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-2",
  "type": "Notations",
  "number": "2.31",
  "title": "",
  "body": " Dans tout la suite, désignera un espace probabilisé.  "
},
{
  "id": "def-independance",
  "level": "2",
  "url": "sec-generalites.html#def-independance",
  "type": "Définition",
  "number": "2.32",
  "title": "",
  "body": "     Deux événements et de sont dits indépendants si .    Une famille d'événements de est dite mutuellement indépendante (MI) si pour toute partie finie de ,       "
},
{
  "id": "subsec-independance-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-4",
  "type": "Explication",
  "number": "2.1.3.1",
  "title": "",
  "body": "    Indépendance de deux événements   est indépendant de si la probabilité de réalisation de sachant est la même que celle de réalisation de : . Ce qui revient à     Indépendance mutuelle  Des évéments , sont mutuelement indépendants si et seulement si pour tout et pour toute partie finie ne contenant pas on a c'est à dire si et seulement si la réalisation de chaque événement est indépendante de la réalisation simultanée d'un ou plusieurs évenements lorsque .     "
},
{
  "id": "subsec-independance-5",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-5",
  "type": "Remarque",
  "number": "2.33",
  "title": "",
  "body": "    Si ou alors tout événement est indépendant de .    deux événements incompatibles et ne peuvent être indépendants que si ou .    Si est une famille MI alors est MI pour toute partie de . En particulier les événements sont deux à deux indépendants.    Soit est une famille d'évéments MI. Si on lui ajoute des événements presques sûrs ou négligeable alors les événements de la nouvelle famille sont MI.    Dans un SCE les événements ne peuvent être deux à deux indépendants, et a fortiori MI, que s'il existe tel que .     "
},
{
  "id": "subsec-independance-6",
  "level": "2",
  "url": "sec-generalites.html#subsec-independance-6",
  "type": "Proposition",
  "number": "2.34",
  "title": "",
  "body": "  Si et sont des événements indépendants alors et sont indépendants, et sont indépendants et et sont indépendants.   "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-generalites.html#thm-",
  "type": "Théorème",
  "number": "2.35",
  "title": "",
  "body": "  Soit une famille MI d'événements de .   Soit une partie de . On pose si et si . Alors la famille est MI (en particulier est MI).    Lemme des coalitions  Soit une famille de parties deux à deux disjointes de . On pose pour tout , . Alors la famille est MI.      "
},
{
  "id": "prop-forcomlement",
  "level": "2",
  "url": "sec-generalites.html#prop-forcomlement",
  "type": "Proposition",
  "number": "2.36",
  "title": "Formule des compléments.",
  "body": " Formule des compléments   Soient des événements de . Alors     On écrit et on raisonne par récurrnece en appliquant l'hypothèse de récurrence avec la probailité    "
},
{
  "id": "subsec-modelisation-4",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-4",
  "type": "Exemple",
  "number": "2.37",
  "title": "signification de certains événements courants.",
  "body": " signification de certains événements courants  Soit une suite quelconque d'événements.    est l'événement «au moins un des événements se réalise» ;     est l'événement «tous les événements se réalisent» ;     est l'événement «les événements se réalisent tous à partir d'un certain rang pour pour au moins un indice ». La probabilité de cet événement est      est l'événement «l'événement se réalise pour une infinité d'indices ». La probabilité de cet événement est      "
},
{
  "id": "subsec-modelisation-6",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-6",
  "type": "Remarque",
  "number": "2.38",
  "title": "Cas où l’univers est au plus dénombrable.",
  "body": " Cas où l'univers est au plus dénombrable  Dans la pratique si l'ensemble qui contient les résultats de l'expérience est au plus plus dénombrable alors on le munit de la tribu de telle sorte que tout ensemble formé de résultats possibles de l'expérience soit un événement. Ce choix de tribu n'est pas adéquat lorsque l'ensemble des résultats est non dénombrable car cela pose des difficultés insurmontables pour définir une probabilité sur .  "
},
{
  "id": "subsec-modelisation-7",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-7",
  "type": "Exemple",
  "number": "2.39",
  "title": "Lancer un dé.",
  "body": " Lancer un dé  On lance un dé à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  "
},
{
  "id": "subsec-modelisation-8",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-8",
  "type": "Exemple",
  "number": "2.40",
  "title": "Lancer deux dés.",
  "body": " Lancer deux dés  On lance deux dés à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Si on s'intéresse à l'événement : «la somme des résultats est paire», on peut créer un espace spécifique sous la forme et y adjoindre la probabilité adéquate ou bien on peut rester dans l'univers et définir la variable aléatoire sur en posant pour tout . On peut alors exprimer l'événement par   "
},
{
  "id": "subsec-modelisation-9",
  "level": "2",
  "url": "sec-generalites.html#subsec-modelisation-9",
  "type": "Exemple",
  "number": "2.41",
  "title": "Suite de lancers d’une pièce de monnaie.",
  "body": " Suite de lancers d'une pièce de monnaie  On lance indéfiniment une piece de monnaie. Si on ne s'intéresse qu'au numéro du premier lancer qui donne «face» alors peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Mais dans ce cas les événements «obtenir trois face successivement au moins une fois» ou «obtenir face une infinité de fois» ne peuvent être exprimés dans .  On peut alors se placer dans l'espace beaucoup plus vaste . Le résultat de chaque séquence infinie de lancers est modélisé par une suite de zéros et de uns. C'est un ensemble non dénombrable et y définir une tribu sur laquelle on doit ensuite définir une probabilité est non aisé. L'approche peut être la suivante : on identifie une famille d'événements élémentaires avec lesquels on peut construire d'autre événements plus complexes et qui couvrent nos besoins et on n'aura qu'à se placer dans la tribu engendrée par ces événements élémentaires.  Par exemple, on peut considérer pour tout l'événement : «le lancer donne face», ou encore On peut alors exprimer   pour tout  en particulier est l'événement «ne jamais obtenir face»    l'événement «le premier face apparaît au lancer» par     l'événement «obtenir face une infinité de fois» par .    l'événement «obtenir trois faces successivement une infinité de fois» par      "
},
{
  "id": "exercises-approfondissement-2",
  "level": "2",
  "url": "sec-generalites.html#exercises-approfondissement-2",
  "type": "Activité",
  "number": "2.1",
  "title": "",
  "body": "  On lance indéfiniment une piece de monnaie non équilibrée. La probabilité d'obtenir face est et les lancers sont indépendants.     Quelle est la probabilité pour que le numéro du premier lancer qui donne face soit pair ? Dans quel cas cette probabilité est-elle égale à celle que le numéro du premier face soit impaire ?    On note cet événement et l'événement «le numéro du premier lancer qui donne face est ». Alors , réunion d'événements deux à deux disjoints. On a donc Par ailleur si et seulement si . Ce qui équivaut à ou encore à .  On constate qu'en général sans jamais toucher ces valeurs extrêmes lorsque varie dans . La probabilité que le premier face ait un numéro impaire est toujours plus grande que celle que ce numéro soit paire et on n'approche d'un équilibre des deux probabilités que si est presque nul, c'est à dire quand il est presque impossible d'obtenir face.  C'est un comportement contre-intuitif. L'intuition pousse plutôt vers sous pretexte qu'il y a «autant de nombres paires que de nombres impaires».      Quelle est la probabilité pour que les numéros de tous les lancers qui donnent face soient pairs ?    Une première méthode  On note l'evénement «tous les lancers qui donnent face sont pairs» et pour tout , l'événement «jusqu'au lancer , tous les lancers qui ont donné face sont de numéro paire». Alors la suite et décroissante donc . Selon la formule des probabilités totales la probabilité conditionnelle étant clairement nulle. Or si on sait que tout les lancers jusqu'à l'instant qui ont donné face sont de numéro paire, alors pour que se réalise il faut et il suffit que le lancer ne donne pas face, peut importe ce que donne le lancer . Donc et ainsi  suit une progression géométrique de raison donc elle converge vers . Alors .  Autre méthode Il suffit de remarquer qu'en fait et que les événements sont mutuellement indépendants et donc     "
},
{
  "id": "exercises-approfondissement-3",
  "level": "2",
  "url": "sec-generalites.html#exercises-approfondissement-3",
  "type": "Activité",
  "number": "2.2",
  "title": "Calcul de l’ndicatrice d’Euler.",
  "body": " Calcul de l'ndicatrice d'Euler   On fixe un entier et on note ses diviseurs premiers. On pose et pour tout diviseur de  On munit de la probabilité uniforme .    Calculer .     Montrer que les événements sont mutuellement indépendants.    Juste pour le test du formatage de la reponse      Retrouver la formule     Juste pour le test du formatage    "
},
{
  "id": "exercises-approfondissement-4",
  "level": "2",
  "url": "sec-generalites.html#exercises-approfondissement-4",
  "type": "Activité",
  "number": "2.3",
  "title": "Formule de Weierstrass.",
  "body": " Formule de Weierstrass   On fixe un réel . On note le nombre premier par ordre croissant et on définit la probabilité sur par On note pour tout , l'ensemble des multiple de .   Justifier que définit bien une probabilité sur .    Calculer pour tout     Montrer que les événements sont mutuellement indépendants.    En déduire que       "
},
{
  "id": "sec-varalea",
  "level": "1",
  "url": "sec-varalea.html",
  "type": "Section",
  "number": "2.2",
  "title": "Variables aléatoires",
  "body": " Variables aléatoires   Variables aléatoires  On se donne dans ce chapitre un espace probabilisé et un espace probabilisable      variable aléatoire discrète     variable aléatoire réelle     variable aléatoire discrète réelle    On appelle variable aléatoire de dans toute application telle que c'est à dire que l'image réciproque par de tout événement est un événement. est dit espace de travail de et son espace des résultats (ou espace des états).  Soit une variable aléatoire de dans .    est dite variable aléatoire discrète (VAD) si l'ensemble est au plus dénombrable et . Ce qui équivaut à      est dite une variable aléatoire réelle (VAR) si .     est dite une variable aléatoire discrète réelle ( VADR ) si elle est discrète et réelle.        Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et dans . Comme quand on lance un dé, désiggnera le numéro obtenu. Il sera considéré comme une application définie sur un ensemble non déterminé et ce qui nous interesse c'est l'ensemble des résultats possible de l'expérience, ici . Cette approche procure l'avantage de pouvoir combiner entre les résultats de plusieurs expériences aléatoires. Ils seront tous des applications définies sur un même ensemble et on peut ainsi les additionner, les comparer...  La question est comment choisir l'espace des états et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.      Sauf précision du contraire, un univers au plus dénombrable sera systématiquement muni de la tribu .    Si est au plus dénombrable ( et muni de la tribu ) alors toute application définie sur est une variable aléatoire quelque soit la tribu considérée dans l'espace d'arrivée.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque de dans peut être considérée comme une variable aléatoire avec très peu de contraintes. Il suffit de se placer du côté de dans une tribu qui contient .  Si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans .  Ses observations restent valides pour une famille dénombrable d'applications définies sur telle que soit au plus dénombrable pour tout . Notamment pour une suite de telles applications.  C'est ainsi qu'il est toujours possible de considérer un modèle dans lequel on peut combiner entre les résultats d'un nombre fini ou dénombrable d'expériences aléatoires si chacune a au plus un ensemble au plus dénombrable de résultats.         La composée de deux variables aléatoires et est une variable aléatoire. De plus si est discrète alors est discrète.    Si pour tout , est une variable aléatoire de dans un espace probabilisable alors l'application définie par est une variable aléatoire de dans . De plus si sont discrètes alors est discrète.    Soit maintenant une variable aléatoire discrète de dans . Alors pour toute application définie sur l'application est une VAD. On la note    On généralise de la façon suivante : si sont des VAD definies sur alors pour toute application définie sur on définit la variable aléatoire discrète par          l'événement     étant donné des variables aléatoires discrètes de dans , on note  pour tout    pour tous    pour tout ,   pour tous        Une variable aléatoire discrète est dite presque partout constante s'il existe tel que . Elle est en particulier dite presque partout nulle si .        Vu la tolérance de l'image réciproque par une application envers les opérations sur les ensembles, les notations précédentes donnent                          Une variable aléatoire est non presque partout constante si et seulement s'il existe tels que . C'est aussi équivalent à l'existence d'au moins deux éléments distincts et de tels que et .      d'utilisation de ces notations    Si et sont des VAD à valeurs dans alors pour tout , et puisque ces événements sont deux à deux disjoints alors     Si est une VAD à valeurs dans alors et particulier      . Par exemple, si alors       Loi d'une variable aléatoire    loi de la variable aléatoire    Soit une variable aléatoire de dans . Alors l'application est une probabilité de . On l'appelle loi de .     Si et sont des variables aléatoires telle que alors on dit que et suivent la même loi et on écrit .    Noter que deux variables aléatoires et peuvent suivre une même loi sans qu'elles soient définies sur un même espace . Ce qui importe c'est l'espace des résultats.  Précisons : si et sont des variables aléatoires définies respectivement sur des espaces et à valeurs dans un même espace alors elles suivent la même loi si et seulement si      Indépendance des variables aléatoires discrètes    Une famille de VAD définies sur (pas nécessairement à valeurs dans le même espace) est dite mutuellement indépendante (MI) si      Si est une famille MI de VAD alors pour toute partie de la famille est MI.     Des variables aléatoires discrètes définies sur sont mutuellement indépendantes si et seulement si        Cette dernière proposition simplifie considérablement la définition de l'indépendance mutuelle d'un nombre fini de VAD.    Elle implique aussi qu'une famille infinie de VAD est MI si et seulement si toutes ses sous-familles finies sont MI.    Une suite de VAD est MI si et seulement pour tout les variables sont MI.       Soit une famille de VAD mutuellement indépendantes et toutes définies sur .  Soit pour tout , une partie de . Alors les événements sont mutuellement indépendants.      Soit une famille de VAD mutuellement indépendantes et toutes définies sur .    Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.    Lemme des coalitions  Soit une famille de parties finies deux à deux disjointes de . Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.         Si est une VAD presque partout constante de alors toute autre VAD définie sur est indépendante de .   car pour tout , on a soit soit . Donc l'événement est indépendant de tou autre événement de .     Soient une VAD et une fonction définie sur . À moins que ou ne soit presque partout constante, les variables et ne peuvent être indépendantes.   On suppose que et ne sont pas presque partout constantes. Il existe alors tel que . Comme alors . Ensuite puisque est non presque partout constante alors et il existe donc tel que et . Ainsi  et ne sont donc pas indépendantes.      Exemples d'utilisations du lemme des coalitions  Soient des VAD définies sur .   Si sont MI alors et sont MI.    Réciproquement si et sont MI alors tout ce qu'on peut dire c'est que est indépendante de pour tout .    Si la variable est elle même un vecteur de la forme et et sont indépndantes alors et sont indépendantes pour tous .      Ce sont des conséquences du lemme des coalitions en utilisant respectivement les applications :    ;     ;     et            Loi d'une variable aléatoire discrète    Soit une variables aléatoire discrète de dans .    est un système complet d'événements de ;    Pour tout ,    Pour une variable aléatoire discrète  , déterminer la loi de revient ainsi à déterminer le couple . L'application est dite fonction des masses de la variable .       Soient deux VAD et définies sur . La loi du couple est par définition la loi de la variable . Elle est entièrement déterminée par le couple .  En outre les lois des variables et sont appelées les lois marginales du couple .     Avec on a on n'a donc pas nécessairement mais si alors   si alors et en particulier ;    si alors et donc .   C'est pour des raisons de simplification que la loi de couple est donc définie à travers et non à tavers .     Soient deux VAD et définies sur .            Ce qui signifie que les lois marginales du couple sont données par sa loi de couple.    Généralisation  Soient des variables aléatoires réelles. La variable est dite un vecteur aléatoire. Sa loi est entièrement déterminée par le couple formé de et de la famille .       Soient et deux VAD. Si alors pour toute fonction définie sur , .    Soient et des VAD. Si pour tout , sont mutuellement indépendantes et sont mutuellement indépendantes alors pour toute fonction définie sur          Si alors et donc . Soit ensuite , alors Ainsi     Les variables et suivent la même loi car Il suffit d'appliquer ensuite la propriété précédente à et .       Sans la condition d'indépendance mutuelle des variables et des variables la propriété n'est plus valide.  Par exemple :  Si et sont des variables aléatoires non presque partout constantes suivant la même loi alors les couples et ne suivent pas la même loi puisque si sont des éléments distincts de tels que et alors      Lois discrètes usuelles  Les lois discrètes usuelles   désignera une VAD définie sur    Loi uniforme finie    loi uniforme sur l'ensemble fini   On dit que suit une loi uniforme sur un ensemble fini et on écrit si Une telle variable est utilisée pour modéliser les expériences aléatoires qui possèdent un nombre fini de résultats possibles tous équiprobables. On notera que dans ce cas pour toute partie de  qu'on exprime en disant que la probabilité qu'un événement se réalise est égale au rapport entre le nombre de résultats favorables à l'événement et celui de tous les résultats possibles.    Loi de Bernouilli    loi de Bernouilli de paramètre   Soit un réel On dit que suit la loi de Bernouilli de paramètre et on écrit si est le résultat d'une expérience aléatoire qui ne possède que deux issues : succès ou échec. La probabilité du succès étant .     Loi binomiale    loi binomiale de paramètres et    Soit un réel et un entier . On dit que suit la loi de binomiale de paramètres et et on écrit si est le nombre de succès obtenus lorsque on répète fois de façon indépendante une expérience de Bernouilli de paramètre .  suit aussi la loi si elle represente le nombre de succès obtenu lorsque on effectue simultanénement et de façon indépendante test de Bernouilli de paramètre .  Si est le résultat du test de Bernouilli alors sachant que les variables sont mutuellement indépendantes et suivent toute la loi     Loi géometrique    loi géométrique de paramètre   Soit un réel On dit que suit la loi géométrique de paramètre et on écrit si est le numéro du premier test qui donne un succès lorsque on répète indéfiniment et de façon indépendante une expérience de Bernouilli de paramètre .  est aussi dite temps d'attente du premier succès.  Si est le résultat du test de Bernouilli alors Sachant que les variables sont mutuellement indépendantes et suivent toute la loi .    Loi de Poisson    loi de Poisson de paramètre   Soit un réel . On dit que suit la loi de Poisson de paramètre et on écrit si  représente le nombre de clients servis pendant une unité de temps dans une file d'attente quand on sait que le nombre moyen de clients par unité de temps est . Pour cette raison la loi de Poisson est aussi appelé loi des files d'attente.       Loi d'une variable aléatoire réelle : fonction de répartition programme marocain   On suppose que est muni de sa tribu de Borel . Dans la suite toutes les variables alétoires réelles considérées sont supposées à valeurs dans l'espace probabilisable . L'espace de travail est supposé muni d'une probabilité .  Il s'agit dans cette section de fournir un moyen de caractériser la loi d'une variable aléatoire réelle non nécessairement discrète. Bien que les notions abordées ne soit pas citées dans le programme français des classes MP, elles peuvent s'avérer indispensables pour vos travaux de recherche (pour le TIPE par exemple) et elles sont utiles même dans le cas des variables aléatoire discrètes. Elles font en outre partie du programme marocain.    Si est une VAR on a vu que l'application définie par est une probabilité de l'espace appelée loi de      Soit une variable aléatoire réelle définie sur l'espace probabilisé . La fonction de répartition de , notée , est la fonction réelle définie par :      propriétés caractéristiques d'une fonction de répartition   Soit une VAR. La fonction de répartition possède les propriétés suivantes :    est croissante ;   est bornée : pour tout .  pour tout , ie est continue à droite en tout point.   et .        Découle de si .    Conséquence de la définition .    La fonction étant croissante elle admet une limite à droite (et à gauche) en . On peut écrire La suite d'événements est decroissante donc par continuité monotone soit et donc      étant monotone bornée, elle admet des limites (finies) en et en . On peut donc écrire et de même .         Soit une VAR. Alors pour tout ,   En particulier est continue en si et seulement si .     et de la même façon que dans la propriété précédente .      Soit une VAR.   L'ensemble des points de discontinuité de est au plus dénombrable.  Soient . Sans perdre en généralité supposons que . Vu les propriétés des fonctions de répartition on a et donc les intervalles ouverts et sont non vides et disjoints. Or toute famille d'intervalles ouverts non vides deux à deux disjoints de est au plus dénombrable chacun des intervalles contient un rationnel et donc il existe une bijection entre la famille des intervalles et une partie de  . Donc est au plus dénombrable.    Si est une VADR alors est non vide et il est inclu dans   Si alors et donc . En outre ne peut être vide car il existe au moins un élément tel que .       Soit une VAR. La fonction permet d'exprimer la probabilité de tous les événements de la forme où est un intervalle quelconque de . Pour deux réels tels que on a:       est la tribu de engendrée par tous les intervalles de . La proposition précédente suggère donc que la fonction de répartition caractérise de façon unique sa loi . On admet le théorème suivant qui confirme cette idée.     Deux VAR ont la même loi si et seulement si elles ont la même fonction de répartition.    cas d'une VADR   Soit est une VADR dont on connait la loi. On pose et pour tout , .   La fonction de répartition de est alors donnée par Rappelons que réciproquemnt la loi de peut être exprimée en fonction de par Le est donc évident dans le cas d'une VADR .  Dans le cas où on peut organiser les valeurs possibles de en une suite strictement croissante  ce n'est pas nécessairement le cas, penser au cas où par exemple  alors pour tout , il existe un unique entier tel que et on a dans ce cas Par ailleurs, si alors et si jamais alors . Résumons :   Dans le cas où prend un nombre fini de valeurs alors est définie comme dans en remplaçant par et par .     Loi uniforme sur un segment    loi uniforme sur le segment    On dit qu'une VAR suit une loi uniforme sur un segment non trivial de et on écrit si où est la longueur de l'intervalle . La variable est le résultat de l'expérience aléatoire qui consiste en le tirage d'un réel entre et de façon équiprobable. La probabilité de tirer un réel entre deux éléments et de vaut .  La fonction de répartition de est définie par Si par exemple alors La fonction est continue sur et en particulier pour tout .      Activités   Loi hypergéometrique    loi hypergéométrique de paramètres     Soient et avec . On prélève de façon équiprobable un échantillon de individus dans une population de individus. On effectue des tests de type Bernouilli sur les individus de l'échantillon sachant que la proportion d'individu positifs au test dans toute la population est . est le nombre d'individus qui s'avèrent positifs au test dans l'échantillon.     Quelle est la loi de ?     et     Le nombre de tests positifs dans l'échantiloon ne peut dépasser , ni le nombre total d'individus positifs dans toute la population. D'un autre côté si alors on est sûr d'avoir au moins tests positifs dans l'échantillon. Ainsi Ce qui suggère de prendre . Mais pour simplifier on prend plutôt quitte à considèrer que les résultats impossibles ont une probabilité nulle.  Ensuite, il y a façon de prélever équiprobablement individus dans une population de éléments. Parmi ces prélévements, ceux qui contiendront exactement individus positifs sont au nombre de car il s'agit de prélever indivdus parmi qui sont positifs au test et individus parmi qui ne le sont pas. Vu l'équiprobabilité des prélèvements on a donc On notera la loi de la variable . Elle est dite loi hypergéomètrique de paramètres et .      On note le résultat du test du individu. Quelle est la loi de ?         Prélever un échantillon de individus de façon équiprobable revient à prelever sans remise un à un et de façon équiporbable les individus. Notons la variable de Bernouilli qui vaut si le individu prélevé de la population est positif au test. Alors . La question précédente montre ainsi que pour tout  Soit maintenant . Grâce à la formule des probabilités totales, on peut écrire  est la probabilité que le individu prélevé soit positif sachant que individus ont été positifs pour les prélévements précédents. Dans ces condition, il reste individu dans la population dont sont positifs. Par équiprobabilité des prélévements on a donc Ainsi Il en ressort que malgré le changement de la répartition des cas positifs\/cas négatifs après chaque prélévement, la probabulité de prélever un cas positif est toujours .      Loi du temps d'attente du succès   Soient et . Quel est la loi du temps d'attente du succés lorsque on répète indéfiniment et de façon indépendante une exprérience de Bernouilli de paramètre      et      Comportement asymptotique d'une loi binomiale   On considère une suite de nombres réels de et on suppose que . Soit pour tout une variable aléatoire qui suit la loi . Déterminer pour tout entier fixé, la limite de et donner une interprétation du résultat obtenu.    Fixons et considérons un entier .  donc et donc . D'un autre côté, puisque est fixé alors Ainsi , ou encore où est une variable aléatoire qui suit la loi . On dit que la suite  converge en loi vers .  Ainsi, une variable aléatoire binomiale de paramètres se comporte lorsque est grand comme une loi de Poisson de paramètre .     Variables aléatoires discrètes sans mémoire   Dans cette activité, nous allons explorer la propriété d'absence de mémoire des variables aléatoires discrètes. Une variable aléatoire discrète à valeurs entières positives ( ) est dite sans mémoire si elle satisfait la propriété suivante pour tous entiers : Nous allons montrer que la distribution géométrique est la seule distribution discrète sans mémoire.     Question 1 : Une variable géométrique est sans mémoire   Soit une variable aléatoire suivant une distribution géométrique de paramètre . Montrer que est sans mémoire.    Pour montrer que est sans mémoire, calculons .     La fonction de survie de est :     Par définition de la probabilité conditionnelle, on a :     En utilisant la fonction de survie, cela devient :     Or, . On a donc bien :      Ainsi, une variable géométrique est sans mémoire.      Question 2 : Réciproque   Soit une variable aléatoire discrète à valeurs entières positives ( ) et sans mémoire. Montrer que suit nécessairement une distribution géométrique.    Pour montrer que suit une distribution géométrique, nous allons analyser sa fonction de survie .      Propriété d'absence de mémoire : La propriété d'absence de mémoire s'écrit : En utilisant la définition de la probabilité conditionnelle, cela devient : Notons . Alors, la propriété devient :      Forme de la fonction de survie : L'équation fonctionnelle implique que est de la forme : En effet, en posant et , on obtient : Par récurrence, on montre que .     Paramètre de la distribution géométrique : Posons , où est un paramètre tel que . Alors, la fonction de survie devient : La fonction de masse de est donnée par : Cela correspond exactement à la distribution géométrique de paramètre .     Ainsi, une variable aléatoire discrète sans mémoire suit nécessairement une distribution géométrique.      Une indépendance contre-intuitive    suit une loi de Poisson de paramètre . est le nombre de succès quand on répète de façon indépendante test de Bernouilli de paramètre .   Déterminer la loi de     Vérifier que et sont indépendantes.          peut potentiellement prendre toutes les valeurs dans . Il en est de même pour . Ensuite pour tout  Ainsi      est le nombre d'echecs pour tests. Il suffit donc de remplacer par dans le calcul de la loi de : . Ensuite si alors  et sont donc bien indépendantes contrairement à «l'intuition». ( et le nombre de succés et le nombre d'echecs pour tests.)       Marche aléatoire sur une droite   Un objet se déplace sur une droite graduée. À chaque instant, il ne peut qu'avancer d'un pas avec une probabilité ou reculer d'un pas avec une probabilité . Les déplacements sont tous indépendants.     Loi de   On note la position de l'objet sur la droite au pas, en supposant qu'il était sur la position d'indice de la droite à l'instant . Quelle est la loi de ?    On note la variable de Bernoulli qui vaut si l'objet avance d'un pas et s'il recule d'un pas au pas. Alors : où suit la loi binomiale .  On en déduit que est pair. Ainsi, est l'ensemble des entiers compris entre et qui ont la même parité que (ou, de manière équivalente, la même parité que ). Pour simplifier, on pose , sachant que les événements sont impossibles lorsque est impair.  Si , alors et donc :       Nombre de chemins et loi de   On représente chaque parcours de l'objet entre les instants et par la ligne brisée passant par les points tel que illustré dans la par la ligne tracée en continu. On note le nombre de ces lignes qui vont du point au point . Expliciter et exprimer la loi de en fonction de ces nombres.       Chaque chemin peut être représenté par un mot unique de longueur formé des motifs \/ (avancer) et \\ (reculer). Si désigne le nombre de motifs \/ et celui des motifs \\ , alors : On en déduit que , ce qui implique qu'un chemin entre et n'est possible que si est de même parité que . Dans ce cas, .  Le nombre de ces chemins est donc : On notera que :   puisque alors signifiant que le nombre de parcours entre et est le même que celui entre et , chaque chemin de à étant le symétrique par rapport à l'axe d'un chemin de à      signifiant que le nombre de parcours entre et est le même que celui entre et ou que chaque chemin de à revient à parcourir à l'envers un chemin de à .    pour tout , , et en particulier , confirmant qu'un parcours entre et s'obtient par décalage du temps d'un chemin de à .     La loi de peut alors s'exprimer comme :       Principe de réflexion   On suppose que et on note le nombre de parcours entre et qui passent au moins une fois par un point de la forme . Justifier que .    Pour chaque chemin allant de vers et touchant au moins une fois l'axe , il existe un unique chemin allant de vers qui est symétrique par rapport à l'axe entre les instants et , où est le premier instant où touche l'axe . Réciproquement, chaque chemin de vers doit toucher l'axe au moins une fois et est le symétrique d'un chemin de vers . Voir la pour une illustration des chemins et .  Cette correspondance établit une bijection entre l'ensemble des chemins et celui des chemins . Ainsi :       Théorème du scrutin   On suppose que et . Montrer que le nombre de parcours de vers qui ne reviennent jamais sur l'origine est et en déduire que lorsque alors     Un chemin partant de vers sans revenir sur l'axe est entièrement déterminé par sa portion allant de vers et qui ne touche jamais l'axe . Si est pair, en posant , leur nombre est donné par : Soit au final : Si on note , la probabilité pour qu'en partant du point on atteigne le point sans jamais revenir à l'origine alors Noter que cela implique que :  est la probabilité de ne pas revenir à l'origine entre les instants et .      Parcours sans retour vers l'origine   En déduire la probabilité pour qu'on retourne pour la première fois à l'origine à l'instant sachant qu'on était sur l'origine à l'instant .    Notons le nombre de ces chemins. Ce nombre est celui des chemins qui vont de à ou de à sans revenir sur l'axe . Par symétrie, le nombre de parcours dans la deuxième catégorie est le même que celui dans la première. Ainsi : En utilisant l'identité , on obtient : Par suite :       Loi du premier retour à l'origine   On suppose que et on note le numéro du premier pas pour lequel l'objet revient sur l'origine. Quelle est la loi de ?     est le temps d'attente du premier retour à l'origine. Il peut être infini si l'objet ne revient jamais à l'origine. Ainsi, .  Pour , l'événement est impossible.  Pour , donc selon la question précédente .  La probabilité que est donnée par : Cette probabilité est nulle si et seulement si . Elle vaut pratiquement si est voisin de ou de . Ce qui signife qu'on est presque sûr de revenir à l'origine si les pas sont équiprobables, est presque sûr de ne jamais y revenir si la probabilité d'avancer ou de reculer est presque nulle.  Voici dans le détail le calcul de :   Rappelons le DSE suivant :     Posons . On a avec égalité si et seulement si . D'où .          "
},
{
  "id": "def-varalea",
  "level": "2",
  "url": "sec-varalea.html#def-varalea",
  "type": "Définition",
  "number": "2.42",
  "title": "",
  "body": "   variable aléatoire discrète     variable aléatoire réelle     variable aléatoire discrète réelle    On appelle variable aléatoire de dans toute application telle que c'est à dire que l'image réciproque par de tout événement est un événement. est dit espace de travail de et son espace des résultats (ou espace des états).  Soit une variable aléatoire de dans .    est dite variable aléatoire discrète (VAD) si l'ensemble est au plus dénombrable et . Ce qui équivaut à      est dite une variable aléatoire réelle (VAR) si .     est dite une variable aléatoire discrète réelle ( VADR ) si elle est discrète et réelle.      "
},
{
  "id": "subsec-varalea-4",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-4",
  "type": "Explication",
  "number": "2.2.1.1",
  "title": "",
  "body": " Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et dans . Comme quand on lance un dé, désiggnera le numéro obtenu. Il sera considéré comme une application définie sur un ensemble non déterminé et ce qui nous interesse c'est l'ensemble des résultats possible de l'expérience, ici . Cette approche procure l'avantage de pouvoir combiner entre les résultats de plusieurs expériences aléatoires. Ils seront tous des applications définies sur un même ensemble et on peut ainsi les additionner, les comparer...  La question est comment choisir l'espace des états et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.  "
},
{
  "id": "subsec-varalea-5",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-5",
  "type": "Remarque",
  "number": "2.43",
  "title": "",
  "body": "   Sauf précision du contraire, un univers au plus dénombrable sera systématiquement muni de la tribu .    Si est au plus dénombrable ( et muni de la tribu ) alors toute application définie sur est une variable aléatoire quelque soit la tribu considérée dans l'espace d'arrivée.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque de dans peut être considérée comme une variable aléatoire avec très peu de contraintes. Il suffit de se placer du côté de dans une tribu qui contient .  Si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans .  Ses observations restent valides pour une famille dénombrable d'applications définies sur telle que soit au plus dénombrable pour tout . Notamment pour une suite de telles applications.  C'est ainsi qu'il est toujours possible de considérer un modèle dans lequel on peut combiner entre les résultats d'un nombre fini ou dénombrable d'expériences aléatoires si chacune a au plus un ensemble au plus dénombrable de résultats.    "
},
{
  "id": "prop-compvar",
  "level": "2",
  "url": "sec-varalea.html#prop-compvar",
  "type": "Proposition",
  "number": "2.44",
  "title": "",
  "body": "    La composée de deux variables aléatoires et est une variable aléatoire. De plus si est discrète alors est discrète.    Si pour tout , est une variable aléatoire de dans un espace probabilisable alors l'application définie par est une variable aléatoire de dans . De plus si sont discrètes alors est discrète.    Soit maintenant une variable aléatoire discrète de dans . Alors pour toute application définie sur l'application est une VAD. On la note    On généralise de la façon suivante : si sont des VAD definies sur alors pour toute application définie sur on définit la variable aléatoire discrète par      "
},
{
  "id": "subsec-varalea-7",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-7",
  "type": "Définition",
  "number": "2.45",
  "title": "",
  "body": "   l'événement     étant donné des variables aléatoires discrètes de dans , on note  pour tout    pour tous    pour tout ,   pour tous        Une variable aléatoire discrète est dite presque partout constante s'il existe tel que . Elle est en particulier dite presque partout nulle si .    "
},
{
  "id": "subsec-varalea-8",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-8",
  "type": "Remarque",
  "number": "2.46",
  "title": "",
  "body": "   Vu la tolérance de l'image réciproque par une application envers les opérations sur les ensembles, les notations précédentes donnent                          Une variable aléatoire est non presque partout constante si et seulement s'il existe tels que . C'est aussi équivalent à l'existence d'au moins deux éléments distincts et de tels que et .    "
},
{
  "id": "subsec-varalea-9",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-9",
  "type": "Exemple",
  "number": "2.47",
  "title": "d’utilisation de ces notations.",
  "body": " d'utilisation de ces notations    Si et sont des VAD à valeurs dans alors pour tout , et puisque ces événements sont deux à deux disjoints alors     Si est une VAD à valeurs dans alors et particulier      . Par exemple, si alors     "
},
{
  "id": "prop-loivaralea",
  "level": "2",
  "url": "sec-varalea.html#prop-loivaralea",
  "type": "Proposition",
  "number": "2.48",
  "title": "Loi d’une variable aléatoire.",
  "body": " Loi d'une variable aléatoire    loi de la variable aléatoire    Soit une variable aléatoire de dans . Alors l'application est une probabilité de . On l'appelle loi de .   "
},
{
  "id": "subsec-varalea-11",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-11",
  "type": "Vocabulaire",
  "number": "2.49",
  "title": "",
  "body": " Si et sont des variables aléatoires telle que alors on dit que et suivent la même loi et on écrit .  "
},
{
  "id": "subsec-varalea-12",
  "level": "2",
  "url": "sec-varalea.html#subsec-varalea-12",
  "type": "Remarque",
  "number": "2.50",
  "title": "",
  "body": " Noter que deux variables aléatoires et peuvent suivre une même loi sans qu'elles soient définies sur un même espace . Ce qui importe c'est l'espace des résultats.  Précisons : si et sont des variables aléatoires définies respectivement sur des espaces et à valeurs dans un même espace alors elles suivent la même loi si et seulement si   "
},
{
  "id": "def-varind",
  "level": "2",
  "url": "sec-varalea.html#def-varind",
  "type": "Définition",
  "number": "2.51",
  "title": "",
  "body": "  Une famille de VAD définies sur (pas nécessairement à valeurs dans le même espace) est dite mutuellement indépendante (MI) si    "
},
{
  "id": "subsec-indvar-3",
  "level": "2",
  "url": "sec-varalea.html#subsec-indvar-3",
  "type": "Remarque",
  "number": "2.52",
  "title": "",
  "body": " Si est une famille MI de VAD alors pour toute partie de la famille est MI.  "
},
{
  "id": "prop-varind",
  "level": "2",
  "url": "sec-varalea.html#prop-varind",
  "type": "Proposition",
  "number": "2.53",
  "title": "",
  "body": "  Des variables aléatoires discrètes définies sur sont mutuellement indépendantes si et seulement si    "
},
{
  "id": "subsec-indvar-5",
  "level": "2",
  "url": "sec-varalea.html#subsec-indvar-5",
  "type": "Remarque",
  "number": "2.54",
  "title": "",
  "body": "   Cette dernière proposition simplifie considérablement la définition de l'indépendance mutuelle d'un nombre fini de VAD.    Elle implique aussi qu'une famille infinie de VAD est MI si et seulement si toutes ses sous-familles finies sont MI.    Une suite de VAD est MI si et seulement pour tout les variables sont MI.    "
},
{
  "id": "prop-partind",
  "level": "2",
  "url": "sec-varalea.html#prop-partind",
  "type": "Proposition",
  "number": "2.55",
  "title": "",
  "body": "  Soit une famille de VAD mutuellement indépendantes et toutes définies sur .  Soit pour tout , une partie de . Alors les événements sont mutuellement indépendants.   "
},
{
  "id": "thm-coalition",
  "level": "2",
  "url": "sec-varalea.html#thm-coalition",
  "type": "Théorème",
  "number": "2.56",
  "title": "",
  "body": "  Soit une famille de VAD mutuellement indépendantes et toutes définies sur .    Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.    Lemme des coalitions  Soit une famille de parties finies deux à deux disjointes de . Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.     "
},
{
  "id": "subsec-indvar-8",
  "level": "2",
  "url": "sec-varalea.html#subsec-indvar-8",
  "type": "Remarque",
  "number": "2.57",
  "title": "",
  "body": "   Si est une VAD presque partout constante de alors toute autre VAD définie sur est indépendante de .   car pour tout , on a soit soit . Donc l'événement est indépendant de tou autre événement de .     Soient une VAD et une fonction définie sur . À moins que ou ne soit presque partout constante, les variables et ne peuvent être indépendantes.   On suppose que et ne sont pas presque partout constantes. Il existe alors tel que . Comme alors . Ensuite puisque est non presque partout constante alors et il existe donc tel que et . Ainsi  et ne sont donc pas indépendantes.      Exemples d'utilisations du lemme des coalitions  Soient des VAD définies sur .   Si sont MI alors et sont MI.    Réciproquement si et sont MI alors tout ce qu'on peut dire c'est que est indépendante de pour tout .    Si la variable est elle même un vecteur de la forme et et sont indépndantes alors et sont indépendantes pour tous .      Ce sont des conséquences du lemme des coalitions en utilisant respectivement les applications :    ;     ;     et         "
},
{
  "id": "thm-loivaraleadisc",
  "level": "2",
  "url": "sec-varalea.html#thm-loivaraleadisc",
  "type": "Théorème",
  "number": "2.58",
  "title": "",
  "body": "  Soit une variables aléatoire discrète de dans .    est un système complet d'événements de ;    Pour tout ,    Pour une variable aléatoire discrète  , déterminer la loi de revient ainsi à déterminer le couple . L'application est dite fonction des masses de la variable .   "
},
{
  "id": "def-loicouple",
  "level": "2",
  "url": "sec-varalea.html#def-loicouple",
  "type": "Définition",
  "number": "2.59",
  "title": "",
  "body": "  Soient deux VAD et définies sur . La loi du couple est par définition la loi de la variable . Elle est entièrement déterminée par le couple .  En outre les lois des variables et sont appelées les lois marginales du couple .   "
},
{
  "id": "subsec-loivaralea-4",
  "level": "2",
  "url": "sec-varalea.html#subsec-loivaralea-4",
  "type": "Remarque",
  "number": "2.60",
  "title": "",
  "body": " Avec on a on n'a donc pas nécessairement mais si alors   si alors et en particulier ;    si alors et donc .   C'est pour des raisons de simplification que la loi de couple est donc définie à travers et non à tavers .  "
},
{
  "id": "prop-loicouple",
  "level": "2",
  "url": "sec-varalea.html#prop-loicouple",
  "type": "Proposition",
  "number": "2.61",
  "title": "",
  "body": "  Soient deux VAD et définies sur .            Ce qui signifie que les lois marginales du couple sont données par sa loi de couple.   "
},
{
  "id": "subsec-loivaralea-6",
  "level": "2",
  "url": "sec-varalea.html#subsec-loivaralea-6",
  "type": "Remarque",
  "number": "2.62",
  "title": "Généralisation.",
  "body": "Généralisation  Soient des variables aléatoires réelles. La variable est dite un vecteur aléatoire. Sa loi est entièrement déterminée par le couple formé de et de la famille .  "
},
{
  "id": "cor-memeloi",
  "level": "2",
  "url": "sec-varalea.html#cor-memeloi",
  "type": "Corollaire",
  "number": "2.63",
  "title": "",
  "body": "    Soient et deux VAD. Si alors pour toute fonction définie sur , .    Soient et des VAD. Si pour tout , sont mutuellement indépendantes et sont mutuellement indépendantes alors pour toute fonction définie sur          Si alors et donc . Soit ensuite , alors Ainsi     Les variables et suivent la même loi car Il suffit d'appliquer ensuite la propriété précédente à et .     "
},
{
  "id": "subsec-loivaralea-8",
  "level": "2",
  "url": "sec-varalea.html#subsec-loivaralea-8",
  "type": "Mise en garde",
  "number": "2.64",
  "title": "",
  "body": " Sans la condition d'indépendance mutuelle des variables et des variables la propriété n'est plus valide.  Par exemple :  Si et sont des variables aléatoires non presque partout constantes suivant la même loi alors les couples et ne suivent pas la même loi puisque si sont des éléments distincts de tels que et alors   "
},
{
  "id": "subsec-loiusuelles-2",
  "level": "2",
  "url": "sec-varalea.html#subsec-loiusuelles-2",
  "type": "Liste",
  "number": "2.65",
  "title": "Les lois discrètes usuelles",
  "body": "Les lois discrètes usuelles   désignera une VAD définie sur    Loi uniforme finie    loi uniforme sur l'ensemble fini   On dit que suit une loi uniforme sur un ensemble fini et on écrit si Une telle variable est utilisée pour modéliser les expériences aléatoires qui possèdent un nombre fini de résultats possibles tous équiprobables. On notera que dans ce cas pour toute partie de  qu'on exprime en disant que la probabilité qu'un événement se réalise est égale au rapport entre le nombre de résultats favorables à l'événement et celui de tous les résultats possibles.    Loi de Bernouilli    loi de Bernouilli de paramètre   Soit un réel On dit que suit la loi de Bernouilli de paramètre et on écrit si est le résultat d'une expérience aléatoire qui ne possède que deux issues : succès ou échec. La probabilité du succès étant .     Loi binomiale    loi binomiale de paramètres et    Soit un réel et un entier . On dit que suit la loi de binomiale de paramètres et et on écrit si est le nombre de succès obtenus lorsque on répète fois de façon indépendante une expérience de Bernouilli de paramètre .  suit aussi la loi si elle represente le nombre de succès obtenu lorsque on effectue simultanénement et de façon indépendante test de Bernouilli de paramètre .  Si est le résultat du test de Bernouilli alors sachant que les variables sont mutuellement indépendantes et suivent toute la loi     Loi géometrique    loi géométrique de paramètre   Soit un réel On dit que suit la loi géométrique de paramètre et on écrit si est le numéro du premier test qui donne un succès lorsque on répète indéfiniment et de façon indépendante une expérience de Bernouilli de paramètre .  est aussi dite temps d'attente du premier succès.  Si est le résultat du test de Bernouilli alors Sachant que les variables sont mutuellement indépendantes et suivent toute la loi .    Loi de Poisson    loi de Poisson de paramètre   Soit un réel . On dit que suit la loi de Poisson de paramètre et on écrit si  représente le nombre de clients servis pendant une unité de temps dans une file d'attente quand on sait que le nombre moyen de clients par unité de temps est . Pour cette raison la loi de Poisson est aussi appelé loi des files d'attente.    "
},
{
  "id": "subsec-fonction-repartition-3",
  "level": "2",
  "url": "sec-varalea.html#subsec-fonction-repartition-3",
  "type": "Vocabulaire",
  "number": "2.66",
  "title": "",
  "body": " Si est une VAR on a vu que l'application définie par est une probabilité de l'espace appelée loi de   "
},
{
  "id": "def-fonction-repartition",
  "level": "2",
  "url": "sec-varalea.html#def-fonction-repartition",
  "type": "Définition",
  "number": "2.67",
  "title": "",
  "body": "  Soit une variable aléatoire réelle définie sur l'espace probabilisé . La fonction de répartition de , notée , est la fonction réelle définie par :    "
},
{
  "id": "subsec-fonction-repartition-5",
  "level": "2",
  "url": "sec-varalea.html#subsec-fonction-repartition-5",
  "type": "Proposition",
  "number": "2.68",
  "title": "propriétés caractéristiques d’une fonction de répartition.",
  "body": " propriétés caractéristiques d'une fonction de répartition   Soit une VAR. La fonction de répartition possède les propriétés suivantes :    est croissante ;   est bornée : pour tout .  pour tout , ie est continue à droite en tout point.   et .        Découle de si .    Conséquence de la définition .    La fonction étant croissante elle admet une limite à droite (et à gauche) en . On peut écrire La suite d'événements est decroissante donc par continuité monotone soit et donc      étant monotone bornée, elle admet des limites (finies) en et en . On peut donc écrire et de même .      "
},
{
  "id": "cor-loidiscont",
  "level": "2",
  "url": "sec-varalea.html#cor-loidiscont",
  "type": "Corollaire",
  "number": "2.69",
  "title": "",
  "body": "  Soit une VAR. Alors pour tout ,   En particulier est continue en si et seulement si .     et de la même façon que dans la propriété précédente .   "
},
{
  "id": "subsec-fonction-repartition-7",
  "level": "2",
  "url": "sec-varalea.html#subsec-fonction-repartition-7",
  "type": "Remarque",
  "number": "2.70",
  "title": "",
  "body": "  Soit une VAR.   L'ensemble des points de discontinuité de est au plus dénombrable.  Soient . Sans perdre en généralité supposons que . Vu les propriétés des fonctions de répartition on a et donc les intervalles ouverts et sont non vides et disjoints. Or toute famille d'intervalles ouverts non vides deux à deux disjoints de est au plus dénombrable chacun des intervalles contient un rationnel et donc il existe une bijection entre la famille des intervalles et une partie de  . Donc est au plus dénombrable.    Si est une VADR alors est non vide et il est inclu dans   Si alors et donc . En outre ne peut être vide car il existe au moins un élément tel que .    "
},
{
  "id": "prop-loirepart",
  "level": "2",
  "url": "sec-varalea.html#prop-loirepart",
  "type": "Proposition",
  "number": "2.71",
  "title": "",
  "body": "  Soit une VAR. La fonction permet d'exprimer la probabilité de tous les événements de la forme où est un intervalle quelconque de . Pour deux réels tels que on a:    "
},
{
  "id": "subsec-fonction-repartition-9",
  "level": "2",
  "url": "sec-varalea.html#subsec-fonction-repartition-9",
  "type": "Remarque",
  "number": "2.72",
  "title": "",
  "body": "  est la tribu de engendrée par tous les intervalles de . La proposition précédente suggère donc que la fonction de répartition caractérise de façon unique sa loi . On admet le théorème suivant qui confirme cette idée.  "
},
{
  "id": "thm-caractloi",
  "level": "2",
  "url": "sec-varalea.html#thm-caractloi",
  "type": "Théorème",
  "number": "2.73",
  "title": "",
  "body": "  Deux VAR ont la même loi si et seulement si elles ont la même fonction de répartition.   "
},
{
  "id": "subsec-fonction-repartition-11",
  "level": "2",
  "url": "sec-varalea.html#subsec-fonction-repartition-11",
  "type": "Exemple",
  "number": "2.74",
  "title": "cas d’une <abbr class=\"acronym\">VADR<\/abbr>.",
  "body": "cas d'une VADR   Soit est une VADR dont on connait la loi. On pose et pour tout , .   La fonction de répartition de est alors donnée par Rappelons que réciproquemnt la loi de peut être exprimée en fonction de par Le est donc évident dans le cas d'une VADR .  Dans le cas où on peut organiser les valeurs possibles de en une suite strictement croissante  ce n'est pas nécessairement le cas, penser au cas où par exemple  alors pour tout , il existe un unique entier tel que et on a dans ce cas Par ailleurs, si alors et si jamais alors . Résumons :   Dans le cas où prend un nombre fini de valeurs alors est définie comme dans en remplaçant par et par .   "
},
{
  "id": "example-U",
  "level": "2",
  "url": "sec-varalea.html#example-U",
  "type": "Exemple",
  "number": "2.75",
  "title": "Loi uniforme sur un segment.",
  "body": " Loi uniforme sur un segment    loi uniforme sur le segment    On dit qu'une VAR suit une loi uniforme sur un segment non trivial de et on écrit si où est la longueur de l'intervalle . La variable est le résultat de l'expérience aléatoire qui consiste en le tirage d'un réel entre et de façon équiprobable. La probabilité de tirer un réel entre deux éléments et de vaut .  La fonction de répartition de est définie par Si par exemple alors La fonction est continue sur et en particulier pour tout .   "
},
{
  "id": "subsec-loi-activite-2",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-2",
  "type": "Activité",
  "number": "2.4",
  "title": "Loi hypergéometrique.",
  "body": " Loi hypergéometrique    loi hypergéométrique de paramètres     Soient et avec . On prélève de façon équiprobable un échantillon de individus dans une population de individus. On effectue des tests de type Bernouilli sur les individus de l'échantillon sachant que la proportion d'individu positifs au test dans toute la population est . est le nombre d'individus qui s'avèrent positifs au test dans l'échantillon.     Quelle est la loi de ?     et     Le nombre de tests positifs dans l'échantiloon ne peut dépasser , ni le nombre total d'individus positifs dans toute la population. D'un autre côté si alors on est sûr d'avoir au moins tests positifs dans l'échantillon. Ainsi Ce qui suggère de prendre . Mais pour simplifier on prend plutôt quitte à considèrer que les résultats impossibles ont une probabilité nulle.  Ensuite, il y a façon de prélever équiprobablement individus dans une population de éléments. Parmi ces prélévements, ceux qui contiendront exactement individus positifs sont au nombre de car il s'agit de prélever indivdus parmi qui sont positifs au test et individus parmi qui ne le sont pas. Vu l'équiprobabilité des prélèvements on a donc On notera la loi de la variable . Elle est dite loi hypergéomètrique de paramètres et .      On note le résultat du test du individu. Quelle est la loi de ?         Prélever un échantillon de individus de façon équiprobable revient à prelever sans remise un à un et de façon équiporbable les individus. Notons la variable de Bernouilli qui vaut si le individu prélevé de la population est positif au test. Alors . La question précédente montre ainsi que pour tout  Soit maintenant . Grâce à la formule des probabilités totales, on peut écrire  est la probabilité que le individu prélevé soit positif sachant que individus ont été positifs pour les prélévements précédents. Dans ces condition, il reste individu dans la population dont sont positifs. Par équiprobabilité des prélévements on a donc Ainsi Il en ressort que malgré le changement de la répartition des cas positifs\/cas négatifs après chaque prélévement, la probabulité de prélever un cas positif est toujours .    "
},
{
  "id": "subsec-loi-activite-3",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-3",
  "type": "Activité",
  "number": "2.5",
  "title": "Loi du temps d’attente du <span class=\"process-math\">\\(k^\\text{e}\\)<\/span> succès.",
  "body": " Loi du temps d'attente du succès   Soient et . Quel est la loi du temps d'attente du succés lorsque on répète indéfiniment et de façon indépendante une exprérience de Bernouilli de paramètre      et    "
},
{
  "id": "act-binomial-poisson",
  "level": "2",
  "url": "sec-varalea.html#act-binomial-poisson",
  "type": "Activité",
  "number": "2.6",
  "title": "Comportement asymptotique d’une loi binomiale.",
  "body": " Comportement asymptotique d'une loi binomiale   On considère une suite de nombres réels de et on suppose que . Soit pour tout une variable aléatoire qui suit la loi . Déterminer pour tout entier fixé, la limite de et donner une interprétation du résultat obtenu.    Fixons et considérons un entier .  donc et donc . D'un autre côté, puisque est fixé alors Ainsi , ou encore où est une variable aléatoire qui suit la loi . On dit que la suite  converge en loi vers .  Ainsi, une variable aléatoire binomiale de paramètres se comporte lorsque est grand comme une loi de Poisson de paramètre .   "
},
{
  "id": "subsec-loi-activite-5",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-5",
  "type": "Activité",
  "number": "2.7",
  "title": "Variables aléatoires discrètes sans mémoire.",
  "body": " Variables aléatoires discrètes sans mémoire   Dans cette activité, nous allons explorer la propriété d'absence de mémoire des variables aléatoires discrètes. Une variable aléatoire discrète à valeurs entières positives ( ) est dite sans mémoire si elle satisfait la propriété suivante pour tous entiers : Nous allons montrer que la distribution géométrique est la seule distribution discrète sans mémoire.     Question 1 : Une variable géométrique est sans mémoire   Soit une variable aléatoire suivant une distribution géométrique de paramètre . Montrer que est sans mémoire.    Pour montrer que est sans mémoire, calculons .     La fonction de survie de est :     Par définition de la probabilité conditionnelle, on a :     En utilisant la fonction de survie, cela devient :     Or, . On a donc bien :      Ainsi, une variable géométrique est sans mémoire.      Question 2 : Réciproque   Soit une variable aléatoire discrète à valeurs entières positives ( ) et sans mémoire. Montrer que suit nécessairement une distribution géométrique.    Pour montrer que suit une distribution géométrique, nous allons analyser sa fonction de survie .      Propriété d'absence de mémoire : La propriété d'absence de mémoire s'écrit : En utilisant la définition de la probabilité conditionnelle, cela devient : Notons . Alors, la propriété devient :      Forme de la fonction de survie : L'équation fonctionnelle implique que est de la forme : En effet, en posant et , on obtient : Par récurrence, on montre que .     Paramètre de la distribution géométrique : Posons , où est un paramètre tel que . Alors, la fonction de survie devient : La fonction de masse de est donnée par : Cela correspond exactement à la distribution géométrique de paramètre .     Ainsi, une variable aléatoire discrète sans mémoire suit nécessairement une distribution géométrique.    "
},
{
  "id": "subsec-loi-activite-6",
  "level": "2",
  "url": "sec-varalea.html#subsec-loi-activite-6",
  "type": "Activité",
  "number": "2.8",
  "title": "Une indépendance contre-intuitive.",
  "body": " Une indépendance contre-intuitive    suit une loi de Poisson de paramètre . est le nombre de succès quand on répète de façon indépendante test de Bernouilli de paramètre .   Déterminer la loi de     Vérifier que et sont indépendantes.          peut potentiellement prendre toutes les valeurs dans . Il en est de même pour . Ensuite pour tout  Ainsi      est le nombre d'echecs pour tests. Il suffit donc de remplacer par dans le calcul de la loi de : . Ensuite si alors  et sont donc bien indépendantes contrairement à «l'intuition». ( et le nombre de succés et le nombre d'echecs pour tests.)     "
},
{
  "id": "marche-aleatoire-deepseek",
  "level": "2",
  "url": "sec-varalea.html#marche-aleatoire-deepseek",
  "type": "Activité",
  "number": "2.9",
  "title": "Marche aléatoire sur une droite.",
  "body": " Marche aléatoire sur une droite   Un objet se déplace sur une droite graduée. À chaque instant, il ne peut qu'avancer d'un pas avec une probabilité ou reculer d'un pas avec une probabilité . Les déplacements sont tous indépendants.     Loi de   On note la position de l'objet sur la droite au pas, en supposant qu'il était sur la position d'indice de la droite à l'instant . Quelle est la loi de ?    On note la variable de Bernoulli qui vaut si l'objet avance d'un pas et s'il recule d'un pas au pas. Alors : où suit la loi binomiale .  On en déduit que est pair. Ainsi, est l'ensemble des entiers compris entre et qui ont la même parité que (ou, de manière équivalente, la même parité que ). Pour simplifier, on pose , sachant que les événements sont impossibles lorsque est impair.  Si , alors et donc :       Nombre de chemins et loi de   On représente chaque parcours de l'objet entre les instants et par la ligne brisée passant par les points tel que illustré dans la par la ligne tracée en continu. On note le nombre de ces lignes qui vont du point au point . Expliciter et exprimer la loi de en fonction de ces nombres.       Chaque chemin peut être représenté par un mot unique de longueur formé des motifs \/ (avancer) et \\ (reculer). Si désigne le nombre de motifs \/ et celui des motifs \\ , alors : On en déduit que , ce qui implique qu'un chemin entre et n'est possible que si est de même parité que . Dans ce cas, .  Le nombre de ces chemins est donc : On notera que :   puisque alors signifiant que le nombre de parcours entre et est le même que celui entre et , chaque chemin de à étant le symétrique par rapport à l'axe d'un chemin de à      signifiant que le nombre de parcours entre et est le même que celui entre et ou que chaque chemin de à revient à parcourir à l'envers un chemin de à .    pour tout , , et en particulier , confirmant qu'un parcours entre et s'obtient par décalage du temps d'un chemin de à .     La loi de peut alors s'exprimer comme :       Principe de réflexion   On suppose que et on note le nombre de parcours entre et qui passent au moins une fois par un point de la forme . Justifier que .    Pour chaque chemin allant de vers et touchant au moins une fois l'axe , il existe un unique chemin allant de vers qui est symétrique par rapport à l'axe entre les instants et , où est le premier instant où touche l'axe . Réciproquement, chaque chemin de vers doit toucher l'axe au moins une fois et est le symétrique d'un chemin de vers . Voir la pour une illustration des chemins et .  Cette correspondance établit une bijection entre l'ensemble des chemins et celui des chemins . Ainsi :       Théorème du scrutin   On suppose que et . Montrer que le nombre de parcours de vers qui ne reviennent jamais sur l'origine est et en déduire que lorsque alors     Un chemin partant de vers sans revenir sur l'axe est entièrement déterminé par sa portion allant de vers et qui ne touche jamais l'axe . Si est pair, en posant , leur nombre est donné par : Soit au final : Si on note , la probabilité pour qu'en partant du point on atteigne le point sans jamais revenir à l'origine alors Noter que cela implique que :  est la probabilité de ne pas revenir à l'origine entre les instants et .      Parcours sans retour vers l'origine   En déduire la probabilité pour qu'on retourne pour la première fois à l'origine à l'instant sachant qu'on était sur l'origine à l'instant .    Notons le nombre de ces chemins. Ce nombre est celui des chemins qui vont de à ou de à sans revenir sur l'axe . Par symétrie, le nombre de parcours dans la deuxième catégorie est le même que celui dans la première. Ainsi : En utilisant l'identité , on obtient : Par suite :       Loi du premier retour à l'origine   On suppose que et on note le numéro du premier pas pour lequel l'objet revient sur l'origine. Quelle est la loi de ?     est le temps d'attente du premier retour à l'origine. Il peut être infini si l'objet ne revient jamais à l'origine. Ainsi, .  Pour , l'événement est impossible.  Pour , donc selon la question précédente .  La probabilité que est donnée par : Cette probabilité est nulle si et seulement si . Elle vaut pratiquement si est voisin de ou de . Ce qui signife qu'on est presque sûr de revenir à l'origine si les pas sont équiprobables, est presque sûr de ne jamais y revenir si la probabilité d'avancer ou de reculer est presque nulle.  Voici dans le détail le calcul de :   Rappelons le DSE suivant :     Posons . On a avec égalité si et seulement si . D'où .        "
},
{
  "id": "sec-espvaralea",
  "level": "1",
  "url": "sec-espvaralea.html",
  "type": "Section",
  "number": "2.3",
  "title": "Espérance et moments d’une variable aléatoire discrète",
  "body": " Espérance et moments d'une variable aléatoire discrète   On se donne une espace probabilisé .    Espérance d'une variable aléatoire discrète   Définition et propriétés     espérance de la VADR     Soit une variable aléatoire discrète réelle définie sur .  On dit que est sommable, ou que admet une espérance, si la famille est sommable. On appelle alors espérance de le réel On notera l'ensemble des VADR sommables définies sur        Quand elle définie, est le barycentre de la famille de points pondérés . Pour cette raison on l'appelle aussi valeur moyenne de .    Dans le cas d'une VADR  à valeurs positives ou nulles, si n'est pas sommable alors on pose par convention  est alors sommable si et seulement si .    En conséquence, pour une VADR  quelconque     La définition a un inconvénient : la somme utilisée est indexée par un ensemble qui dépend de . Ce qui pose un problème lorsqu'on combine entre plusieurs variables aléatoire. Comme lorsque on s'intéresse à par exemple.  La formule de transfert énoncée ci-après résout ce problème.    La définition de dépend seulement de la loi de . Dans ce sens deux variables qui ont la même loi ont la même espérance. Nous parlerons souvent de l'espérance d'une loi de probabilité pour désigner l'espérance des variables qui suivent cette loi.    La définition se limite aux variables aléatoires discrète réelles , mais elle est tout à fait valable sans aucune modification pour les variables aléatoires discrètes à valeurs complexes . La notion de base utilisée étant celle de familles sommables et celle-ci a été étudiée dans le cadre des familles de nombres réels ou complexes.        On peut généraliser la notion d'espérance à des vecteurs aléatoires discrets en utilisant les «variables composantes» : si est un vecteur aléatoire discret à valeurs dans un -ev de dimension finie qui s'écrit sous la forme où est une base fixée de , alors, par définition, est sommable si et seulement si les variables sont sommables et dans ce cas Cela pose toutefois le problème de la dépendance de cette définition par rapport à la base utilisée. (Voir remarque )    Dans le cas d'une matrice aléatoire par exemple, est sommable si et seulement si est sommable pout et dans ce cas, par définition     Attention toutefois : les familles sommables de vecteurs ne sont pas au programme. Donc l'écriture déborde du cadre limité par celui-ci.       On suppose que est au plus dénombrable. Une VADR  définie sur est sommable si et seulement si la famille est sommable et dans ce cas     La famille d'événemnts est une partition de et pour tout on a Donc selon le théorème de sommation par paquets et dans ce cas      Apparement ce dernier résultat résout le problème de l'ecriture de en fonction de l'ensemble (qui dépend de ). L'intérêt est toutefois relatif car dans la pratique on ne contrôle pas l'univers lui même et il n'est pas nécessairement au plus dénombrable.    formule de transfert   Soit une VAD définie sur (possiblement à valeurs vectorielles). Soit une application définie sur .  La variable est sommable si et seulement si la famille est sommable et dans ce cas     On pose et on imite la démonstration de la proposition précédente en observant cette fois que est une partition de . Selon le théorème de sommation par paquets, est sommable si et seulement si Or pour tout  Ce qui ramène l'équivalence à juste la deuxième condition, elle même équivalente à la sommabilité de la variable . D'où l'équivalence énoncée dans le théorème et la validité de la formule : par sommation par paquets.      Soient et deux VADR . Soit une application définie sur . La variable est sommable si et seulement si la famille est sommable est dans ce cas     Il suffit d'appliquer la formule de transfert au couple .       La formule de transfert permet donc de combiner les résultats de deux variables et en utilisant la loi conjointe du couple . Ce qui résout le problème de la dépendance de l'expression de de l'ensemble .  Par exemple la variable est sommable si et seulement si la famille est sommable et dans ce cas Noter qu'en considérant les application et , alors selon ce même résultat, les variables et sont respectivement sommables si et seulement si les familles et sont sommables et dans ce cas Expressions qui utilisent notablement le même ensemble des indices pour les deux sommes.       Toutes les variables aléatoires introduites dans la suite sont supposées définies sur l'espace .    Espérance d'une variable presque partout constante  Une VADR  presque partout constante de valeur est sommable et .    Linéarité de l'espérance  Si et sont deux VADR sommables de alors pour tout , est sommable et Ce qui signifie que est un -ev et que est une forme linéaire de .    Positivité de l'espérance  Si est une VADR positive alors . De plus si et seulement si est presque partout nulle sur .    Croissance et domination  Soient et deux VADR .   Si et sont sommables et alors .    Si et est sommable alors est sommable et        Effet de l'indépendance  Si et sont deux VADR indépendantes sommables alors est sommable et .    Inégalité de Cauchy-Schwarz  Soient et deux VADR . Si et sont sommables alors est sommable et on a avec égalité si et seulement si est presque partout nulle ou s'il existe une constante telle que presque partout sur (ie )         toute VADR  bornée est sommable. De plus     Si sont des VADR sommables alors et sont sommables.   La sommabilité de et découle de la linéarité de l'espérance et des relation          Soit un vecteur aléatoire sommable au sens de la remarque alors ne dépend pas de la base choisie dans .   Considérons une autre base de . Posons pour tout , alors pour tout  En appliquant la même recette au vecteur on aboutit à Maintenant, puisque les variables sont par défintion sommabales alors les variables sont sommables par linéarité et et ainsi . Expression qui prouve que ne dépend pas de la base utilisée.    Linéarité de l'espérance d'un vecteur aléatoire  Si et sont des vecteurs aléatoires sommables à valeurs dans un même espace vectoriel de dimension finie alors pour tout , le vecteur est sommable et   D'un autre coté si est un vecteur constant non nul de et est une VADR alors le vecteur est sommable si et seulement si est sommable et dans ce cas .   Formule de transfert linéaire  Soit un vecteur aléatoire à valeurs dans un espace vectoriel de dimension finie . Si est sommable alors pour toute application linéaire définie sur , la variable est sommable et    Si sont les composantes de dans une base de , alors . Les variables sont sommables donc est sommable et par linéarité de l'espérance Puisque par définition, , alors on a aussi         Exemples usuels   Espérances des lois usuelles    désignera une VADR .     Loi uniforme   Si alors .  En particulier si alors      Loi de Bernouilli   Si alors .     Loi binomiale   Si alors .     Loi géométrique   Si alors .     Loi de Poisson   Si alors .        Activités   Loi hypergéométrique   Si alors .    Rappelons que signifie Donc      Temps d'attente du succès   Si est le temps d'attente du succès quand on répète indéfiniment et de façon indépendante un test de Bernouilli de paramètre alors     On peut écrire avec et si . Les variables sont mutuellement indépendantes et suivent toute la loi , donc   Par calcul direct : on a déjà calculé la loi de  donc      Espérance d'une variable à valeurs dans   Une VADR  à valeurs dans est sommable si et seulement si la suite est sommable et dans ce cas     La famille est à termes réels positifs, ce qui legitime le calcul suivant, y compris pour l'interversion des sommes :      Espérance du min   On considère deux VAD à valeurs dans , indépendantes et de même loi. Exprimer en fonction des probabilités . Appliquer au cas où et expliquer le résultat obtenu.    Selon l'activité précédente Si alors pour tout  et finalement  est le temps d'attente d'au moins un succés quand on exécute simultanement deux instances indépendantes d'un même test de Bernouilli de paramètre . Si on note respectivement et les événements succés pour le premier et le deuxième test, le paramètre de notre expérience de Bernouilli est Ce qui montre qu'en fait   Noter que si et sont indépendantes mais et alors un calcul similaire aboutit à      Une composition de lois    est une variable qui suit la loi . est une suite de variables de Bernouilli de même paramètre . On suppose que et toutes les variables sont mutuellement indépendantes. Déterminer la loi de la variable et calculer son espérance. Décrire une expérience aléatoire qu'on peut modéliser avec .     Donc et par suite .       Variance et covariance   Définition et propriétés    Une VADR  est dite de carré sommable si est sommable.  On notera l'ensemble des VADR de carrés sommables définies sur .       est un -espace vectoriel et le produit de deux VADR de carrés sommables est une variable sommable.    Découle du fait que si alors et donc par domination. Ensuite pour tout  et donc, par domination, . Sachant que la variable nulle est dans , ceci prouve que est un sous-espace vectoriel de .       variance de la VADR      covariance des VADR  et      Soit . La variable est sommable et son espérance est appelée variance de . On la note      Soient . La variable est sommable et son espérance est appelée covariance des variables et . On la note .        est la moyenne «quadratique» de . Elle mésure la moyenne de l'écart que peut prendre avec sa moyenne .   mésure le degré de corélation entre et , c'est à dire à quels points les résultats obtenus par et par s'influencent les uns les autres. On notera par exemple que si et sont indépendantes (aucune corélation) alors et sont indépendantes et donc        Noter que si alors .           Soient     avec égalité si et seulement si est presque partout constante.              Si et sont indépendantes alors .          est une forme bilinéaire symétrique positive de . L'inégalité de Cauchy-Schwarz pour cette forme s'écrit : avec égalité si et seulement si est presque partout constante ou s'il existe des réels et tels que presque partout.      Soient des variables aleátoires discrètes de carrés sommables. Si sont deux à deux indépendantes alors en particulier        écart-type de la VADR       coefficient de corrélation des VADR  et     Soiente et des variables aléatoires de carrés sommables.   On appelle écart-type de le réel .    On suppose que et ne sont pas presque partout constantes. On appelle coefficient de corrélation de et le réel            est une semi-norme de . Pour tout , si et seulement si est presque partout constante.    Si on dit que les variables aléatoires et sont non corrélées . C'est le cas par exemple si elles sont indépendantes.  La non corrélation est une sorte «d'orthogonalité» pour la forme bilinéaire symétrique .    Si et ne sont pas presque partout constantes, selon l'inégalité de Cauchy-Schwarz, on a avec égalité si et seulement s'il existe des réels et tels que presque partout avec si et si . On dit que et sont linéairement corrélées (positivément ou négativement selon le signe de ).  Plus est voisin de plus les variables et sont «positivement» corrélées. Plus il est voisin de plus elles sont «négativement» corrélées.    Une VADR  est dite centrée si . Elle est dite centrée réduite si elle est centrée et .  Pour toute VADR  non partout constante, la VADR  est centrée réduite.       Matrice des covariances d'un vecteur aléatoire    matrice des covariances du vecteur aléatoire   On considère des VADR  . On appelle matrice des covariances du vecteur la matrice carrée de taille dont les coefficients sont . est la matrice de Gram de la famille pour la forme bilinéaire symétrique .  Pour tout , on a où (voir l'activité ). On en déduit par exemple que est presque partout constante si et seulement si .   est une matrice symétrique positive. Elle est en particulier orthogonalemnt diagonalisable et ses valeurs propres sont positives ou nulles. Une base orthonormale de vecteurs propres peut servir à construire une base de l'espace vectoriel engendré par formée de VADR  deux à deux non corrélées . En outre les vecteurs dans cette base qui sont associés à la valeur propre nulle sont des VADR presque partout constantes. Ce qui permet de représenter tout élément de à une VADR presque partout constante près comme une combinaison linéaire de  VADR non partout constantes et deux à deux non corrélées. Ces observations sont essentielles dans ce qu'on appelle Analyse en Composantes Principales (ACP). Voir pour cela :   la définition sur Wikipedia     un document plus technique est plus détaillé sur le web    D'autre propriétés de la matrices de covariances seront en outre explorées dans les activités et      Exemples usuels   Variances des lois usuelles.   On considère une VADR  .     Loi uniforme  Si à valeurs dans alors .  En général si suit une loi uniforme à valeurs dans alors     Loi de Bernouilli  Si alors     Loi binomiale  Si alors     Loi géometrique  Si alors     Loi de Poisson  Si alors .       Activités   Matrice des covariances d'un vecteur aléatoire   Dans cette activité, nous étudions la matrice des covariances d'un vecteur aléatoire discret à valeurs dans . Nous allons explorer les propriétés de cette matrice et en donner une application.  On dit que admet un moment d'ordre si ses composantes en admettent. On suppose que admet un moment d'ordre et on pose par définition             est une matrice symétrique réelle d'ordre appelée matrice des covariances du vecteur .    Symétrie et positivité   Soit . Montrer que : et en déduire que est une matrice symétrique positive.    Par bilinéarité de la covariance on a le développement : Un résultat usuel d'un autre côte donne donc . La matrice qui est naturellement symétrique est donc positive puisque cette dernière égalité prouve que      Une expression de la matrice des covariances   Montrer que : En déduire que si alors et qu'en particulier     On observe que Donc : Si alors et donc .      Transformation linéaire d'un vecteur aléatoire   Soient une matrice et un vecteur colonne. On considère le vecteur aléatoire .  Montrer que admet des moments d'ordre 2.  Montrer que : dans cette relation on peut remplacer par un vecteur aléatoire à valeurs dans un -ev de dimension finie quelconque et par une application linéaire définie sur cet espace et à valeurs dans un autre espace , le vecteur éant pris dans . Elle s'écrit alors On admet cette dernière propriété.  Montrer que la matrice des covariances de est donnée par :         Comme admet des moments d'ordre 2, chaque composante admet une variance finie. Chaque composante du vecteur est une combinaison linéaire des , donc admet également des moments d'ordre 2.  Par linéarité de l'espérance, on a :   La matrice des covariances de est donnée par : Donc d'après la relation précédente sur l'espérance           Toute matrice symétrique positive est une matrice de covariances   Soit une matrice symétrique positive. Montrer qu'il existe un vecteur aléatoire tel que .    Comme est symétrique positive, il existe une matrice symétrique positive telle que : . Soit un vecteur aléatoire dont les composantes sont des variables aléatoires indépendantes de variance 1. On a et donc le vecteur a pour matrice des covariances :       Produit d'Hadamard et indépendance   Soient et deux vecteurs aléatoires de carrés sommables, centrés et indépendants. On définit le produit d'Hadamard de deux matrices de même tailles par Montrer que :     Comme et sont indépendants alors pour tout couple d'indices , et indépendant de et donc . En outre, est indépendant de par coalition. On a alors : Ce qui montre que .      Produit d'Hadamard de matrices symétriques positives   En déduire que le produit d'Hadamard de deux matrices symétriques positives est une matrice symétrique positive.    Soient et deux matrices symétriques positives. D'après la question précédente, il existe des vecteurs aléatoires et tels que et . Alors, , qui est une matrice des covariances, donc symétrique positive.      Espérance d'une forme quadratique   Soit un vecteur aléatoire de ayant un moment d'ordre . On note la matrice des covariances de et son espérance.  L'activité propose de montrer la formule dite formule des formes quadratiques et quelques exemples d'application ensuite.    Formule des formes quadratiques   Soit une matrice carrée constante. Démontrer la formule :     Soit un vecteur aléatoire de dimension , de moyenne et de matrice de covariance . Soit une matrice carrée de taille .  Nous voulons calculer . Pour cela, décomposons en sa moyenne et son écart par rapport à la moyenne . Ainsi, , où et .  En substituant dans la forme quadratique, nous obtenons :   Développons cette expression :   Prenons l'espérance des deux côtés. Comme , les termes linéaires en disparaissent :   Il reste à calculer . Notons que est un scalaire, donc égal à sa trace :   En utilisant la propriété de cyclicité de la trace ( ), nous avons :   En prenant l'espérance, nous obtenons :   Or, , donc :   En combinant ce résultat avec l'expression précédente, nous obtenons finalement :   Ce qui conclut la démonstration.      Modèle de portefeuille binaire   Objectif : Comprendre comment les formes quadratiques peuvent modéliser les interactions entre actifs dans un portefeuille binaire.   Vous gérez un portefeuille de 3 actifs binaires. Chaque actif peut être actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . Les actifs peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les interactions entre les actifs du portefeuille. Chaque élément quantifie l'influence de l'actif sur l'actif . Par exemple, signifie que l'actif 2 influence l'actif 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque actif.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes de risque du portefeuille.      Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : Une espérance plus élevée indique un portefeuille plus risqué.       Réseau aléatoire avec interactions binaires   Objectif : Explorer comment les formes quadratiques peuvent modéliser les connexions dans un réseau aléatoire.   Vous étudiez un réseau de 4 nœuds, où chaque nœud est actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . La matrice représente les connexions entre les nœuds.   Données :     ,   ,   ,   .   les variables sont supposés inépendantes.   La matrice de connexion .    Rôle de la matrice de connexion  La matrice représente les connexions entre les nœuds du réseau. Chaque élément vaut 1 si les nœuds et sont connectés, et 0 sinon. Par exemple, signifie que les nœuds 1 et 2 sont connectés. Les éléments diagonaux sont fixés à 0 pour indiquer qu'un nœud n'est pas connecté à lui-même.   Representation du réseaux étudié      Tâches :    Calculez en utilisant la formule .  Interprétez le résultat en termes de nombre attendu de paires de nœuds actifs connectés.      Solution :     Calcul de :   La matrice de covariance est diagonale car les variables sont indépendantes :    (car a des zéros sur la diagonale),   ,   .     Interprétation : En moyenne, 3.42 paires de nœuds actifs sont connectées dans le réseau.       Modèle de vote avec dépendances   Objectif : Analyser comment les formes quadratiques peuvent modéliser les influences entre électeurs dans un système de vote.   Vous étudiez un système de vote avec 3 électeurs. Chaque électeur vote pour un candidat ( ) avec une probabilité ou s'abstient ( ) avec une probabilité . Les votes peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les influences entre les électeurs. Chaque élément quantifie l'influence de l'électeur sur l'électeur . Par exemple, signifie que l'électeur 2 influence l'électeur 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque électeur.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes d'influence des électeurs sur le résultat du vote.      Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : L'espérance élevée reflète une forte influence des électeurs corrélés sur le résultat du vote.         Moments d'ordre supérieurs    Soient une VADR et . On dit que est -sommable si la variable est sommable. L'espéance est alors appelée moment d'ordre de .  On notera l'ensemble des VADR  -sommables de .     "
},
{
  "id": "def-esperance",
  "level": "2",
  "url": "sec-espvaralea.html#def-esperance",
  "type": "Définition",
  "number": "2.77",
  "title": "",
  "body": "   espérance de la VADR     Soit une variable aléatoire discrète réelle définie sur .  On dit que est sommable, ou que admet une espérance, si la famille est sommable. On appelle alors espérance de le réel On notera l'ensemble des VADR sommables définies sur    "
},
{
  "id": "subsubsec-defprop-3",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-3",
  "type": "Remarque",
  "number": "2.78",
  "title": "",
  "body": "   Quand elle définie, est le barycentre de la famille de points pondérés . Pour cette raison on l'appelle aussi valeur moyenne de .    Dans le cas d'une VADR  à valeurs positives ou nulles, si n'est pas sommable alors on pose par convention  est alors sommable si et seulement si .    En conséquence, pour une VADR  quelconque     La définition a un inconvénient : la somme utilisée est indexée par un ensemble qui dépend de . Ce qui pose un problème lorsqu'on combine entre plusieurs variables aléatoire. Comme lorsque on s'intéresse à par exemple.  La formule de transfert énoncée ci-après résout ce problème.    La définition de dépend seulement de la loi de . Dans ce sens deux variables qui ont la même loi ont la même espérance. Nous parlerons souvent de l'espérance d'une loi de probabilité pour désigner l'espérance des variables qui suivent cette loi.    La définition se limite aux variables aléatoires discrète réelles , mais elle est tout à fait valable sans aucune modification pour les variables aléatoires discrètes à valeurs complexes . La notion de base utilisée étant celle de familles sommables et celle-ci a été étudiée dans le cadre des familles de nombres réels ou complexes.    "
},
{
  "id": "subsubsec-defprop-4",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-4",
  "type": "Exploration",
  "number": "2.10",
  "title": "",
  "body": "   On peut généraliser la notion d'espérance à des vecteurs aléatoires discrets en utilisant les «variables composantes» : si est un vecteur aléatoire discret à valeurs dans un -ev de dimension finie qui s'écrit sous la forme où est une base fixée de , alors, par définition, est sommable si et seulement si les variables sont sommables et dans ce cas Cela pose toutefois le problème de la dépendance de cette définition par rapport à la base utilisée. (Voir remarque )    Dans le cas d'une matrice aléatoire par exemple, est sommable si et seulement si est sommable pout et dans ce cas, par définition     Attention toutefois : les familles sommables de vecteurs ne sont pas au programme. Donc l'écriture déborde du cadre limité par celui-ci.    "
},
{
  "id": "prop-casdenom",
  "level": "2",
  "url": "sec-espvaralea.html#prop-casdenom",
  "type": "Proposition",
  "number": "2.79",
  "title": "",
  "body": "  On suppose que est au plus dénombrable. Une VADR  définie sur est sommable si et seulement si la famille est sommable et dans ce cas     La famille d'événemnts est une partition de et pour tout on a Donc selon le théorème de sommation par paquets et dans ce cas    "
},
{
  "id": "subsubsec-defprop-6",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-6",
  "type": "Remarque",
  "number": "2.80",
  "title": "",
  "body": " Apparement ce dernier résultat résout le problème de l'ecriture de en fonction de l'ensemble (qui dépend de ). L'intérêt est toutefois relatif car dans la pratique on ne contrôle pas l'univers lui même et il n'est pas nécessairement au plus dénombrable.  "
},
{
  "id": "thm-transfert",
  "level": "2",
  "url": "sec-espvaralea.html#thm-transfert",
  "type": "Théorème",
  "number": "2.81",
  "title": "formule de transfert.",
  "body": " formule de transfert   Soit une VAD définie sur (possiblement à valeurs vectorielles). Soit une application définie sur .  La variable est sommable si et seulement si la famille est sommable et dans ce cas     On pose et on imite la démonstration de la proposition précédente en observant cette fois que est une partition de . Selon le théorème de sommation par paquets, est sommable si et seulement si Or pour tout  Ce qui ramène l'équivalence à juste la deuxième condition, elle même équivalente à la sommabilité de la variable . D'où l'équivalence énoncée dans le théorème et la validité de la formule : par sommation par paquets.   "
},
{
  "id": "cor-transfert",
  "level": "2",
  "url": "sec-espvaralea.html#cor-transfert",
  "type": "Corollaire",
  "number": "2.82",
  "title": "",
  "body": "  Soient et deux VADR . Soit une application définie sur . La variable est sommable si et seulement si la famille est sommable est dans ce cas     Il suffit d'appliquer la formule de transfert au couple .   "
},
{
  "id": "subsubsec-defprop-9",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-9",
  "type": "Remarque",
  "number": "2.83",
  "title": "",
  "body": "   La formule de transfert permet donc de combiner les résultats de deux variables et en utilisant la loi conjointe du couple . Ce qui résout le problème de la dépendance de l'expression de de l'ensemble .  Par exemple la variable est sommable si et seulement si la famille est sommable et dans ce cas Noter qu'en considérant les application et , alors selon ce même résultat, les variables et sont respectivement sommables si et seulement si les familles et sont sommables et dans ce cas Expressions qui utilisent notablement le même ensemble des indices pour les deux sommes.    "
},
{
  "id": "prop-proprietes",
  "level": "2",
  "url": "sec-espvaralea.html#prop-proprietes",
  "type": "Proposition",
  "number": "2.84",
  "title": "",
  "body": "  Toutes les variables aléatoires introduites dans la suite sont supposées définies sur l'espace .    Espérance d'une variable presque partout constante  Une VADR  presque partout constante de valeur est sommable et .    Linéarité de l'espérance  Si et sont deux VADR sommables de alors pour tout , est sommable et Ce qui signifie que est un -ev et que est une forme linéaire de .    Positivité de l'espérance  Si est une VADR positive alors . De plus si et seulement si est presque partout nulle sur .    Croissance et domination  Soient et deux VADR .   Si et sont sommables et alors .    Si et est sommable alors est sommable et        Effet de l'indépendance  Si et sont deux VADR indépendantes sommables alors est sommable et .    Inégalité de Cauchy-Schwarz  Soient et deux VADR . Si et sont sommables alors est sommable et on a avec égalité si et seulement si est presque partout nulle ou s'il existe une constante telle que presque partout sur (ie )     "
},
{
  "id": "subsubsec-defprop-11",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-11",
  "type": "Remarque",
  "number": "2.85",
  "title": "",
  "body": "   toute VADR  bornée est sommable. De plus     Si sont des VADR sommables alors et sont sommables.   La sommabilité de et découle de la linéarité de l'espérance et des relation      "
},
{
  "id": "subsubsec-defprop-12",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-defprop-12",
  "type": "Exploration",
  "number": "2.11",
  "title": "",
  "body": "   Soit un vecteur aléatoire sommable au sens de la remarque alors ne dépend pas de la base choisie dans .   Considérons une autre base de . Posons pour tout , alors pour tout  En appliquant la même recette au vecteur on aboutit à Maintenant, puisque les variables sont par défintion sommabales alors les variables sont sommables par linéarité et et ainsi . Expression qui prouve que ne dépend pas de la base utilisée.    Linéarité de l'espérance d'un vecteur aléatoire  Si et sont des vecteurs aléatoires sommables à valeurs dans un même espace vectoriel de dimension finie alors pour tout , le vecteur est sommable et   D'un autre coté si est un vecteur constant non nul de et est une VADR alors le vecteur est sommable si et seulement si est sommable et dans ce cas .   Formule de transfert linéaire  Soit un vecteur aléatoire à valeurs dans un espace vectoriel de dimension finie . Si est sommable alors pour toute application linéaire définie sur , la variable est sommable et    Si sont les composantes de dans une base de , alors . Les variables sont sommables donc est sommable et par linéarité de l'espérance Puisque par définition, , alors on a aussi      "
},
{
  "id": "subsubsec-exemple-esperance-2",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-exemple-esperance-2",
  "type": "Liste",
  "number": "2.86",
  "title": "Espérances des lois usuelles",
  "body": " Espérances des lois usuelles    désignera une VADR .     Loi uniforme   Si alors .  En particulier si alors      Loi de Bernouilli   Si alors .     Loi binomiale   Si alors .     Loi géométrique   Si alors .     Loi de Poisson   Si alors .     "
},
{
  "id": "subsubsec-activites-2",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-2",
  "type": "Activité",
  "number": "2.12",
  "title": "Loi hypergéométrique.",
  "body": " Loi hypergéométrique   Si alors .    Rappelons que signifie Donc    "
},
{
  "id": "subsubsec-activites-3",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-3",
  "type": "Activité",
  "number": "2.13",
  "title": "Temps d’attente du <span class=\"process-math\">\\(k^\\text{e}\\)<\/span> succès.",
  "body": " Temps d'attente du succès   Si est le temps d'attente du succès quand on répète indéfiniment et de façon indépendante un test de Bernouilli de paramètre alors     On peut écrire avec et si . Les variables sont mutuellement indépendantes et suivent toute la loi , donc   Par calcul direct : on a déjà calculé la loi de  donc    "
},
{
  "id": "act-essomme",
  "level": "2",
  "url": "sec-espvaralea.html#act-essomme",
  "type": "Activité",
  "number": "2.14",
  "title": "Espérance d’une variable à valeurs dans <span class=\"process-math\">\\(\\N\\)<\/span>.",
  "body": " Espérance d'une variable à valeurs dans   Une VADR  à valeurs dans est sommable si et seulement si la suite est sommable et dans ce cas     La famille est à termes réels positifs, ce qui legitime le calcul suivant, y compris pour l'interversion des sommes :    "
},
{
  "id": "subsubsec-activites-5",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-5",
  "type": "Activité",
  "number": "2.15",
  "title": "Espérance du min.",
  "body": " Espérance du min   On considère deux VAD à valeurs dans , indépendantes et de même loi. Exprimer en fonction des probabilités . Appliquer au cas où et expliquer le résultat obtenu.    Selon l'activité précédente Si alors pour tout  et finalement  est le temps d'attente d'au moins un succés quand on exécute simultanement deux instances indépendantes d'un même test de Bernouilli de paramètre . Si on note respectivement et les événements succés pour le premier et le deuxième test, le paramètre de notre expérience de Bernouilli est Ce qui montre qu'en fait   Noter que si et sont indépendantes mais et alors un calcul similaire aboutit à    "
},
{
  "id": "subsubsec-activites-6",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-activites-6",
  "type": "Activité",
  "number": "2.16",
  "title": "Une composition de lois.",
  "body": " Une composition de lois    est une variable qui suit la loi . est une suite de variables de Bernouilli de même paramètre . On suppose que et toutes les variables sont mutuellement indépendantes. Déterminer la loi de la variable et calculer son espérance. Décrire une expérience aléatoire qu'on peut modéliser avec .     Donc et par suite .   "
},
{
  "id": "def-carre-sommable",
  "level": "2",
  "url": "sec-espvaralea.html#def-carre-sommable",
  "type": "Définition",
  "number": "2.87",
  "title": "",
  "body": "  Une VADR  est dite de carré sommable si est sommable.  On notera l'ensemble des VADR de carrés sommables définies sur .   "
},
{
  "id": "prop-ltwo",
  "level": "2",
  "url": "sec-espvaralea.html#prop-ltwo",
  "type": "Proposition",
  "number": "2.88",
  "title": "",
  "body": "   est un -espace vectoriel et le produit de deux VADR de carrés sommables est une variable sommable.    Découle du fait que si alors et donc par domination. Ensuite pour tout  et donc, par domination, . Sachant que la variable nulle est dans , ceci prouve que est un sous-espace vectoriel de .   "
},
{
  "id": "def-varcovar",
  "level": "2",
  "url": "sec-espvaralea.html#def-varcovar",
  "type": "Définition",
  "number": "2.89",
  "title": "",
  "body": "   variance de la VADR      covariance des VADR  et      Soit . La variable est sommable et son espérance est appelée variance de . On la note      Soient . La variable est sommable et son espérance est appelée covariance des variables et . On la note .        est la moyenne «quadratique» de . Elle mésure la moyenne de l'écart que peut prendre avec sa moyenne .   mésure le degré de corélation entre et , c'est à dire à quels points les résultats obtenus par et par s'influencent les uns les autres. On notera par exemple que si et sont indépendantes (aucune corélation) alors et sont indépendantes et donc    "
},
{
  "id": "subsubsec-varcovar-5",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-varcovar-5",
  "type": "Remarque",
  "number": "2.90",
  "title": "",
  "body": "   Noter que si alors .        "
},
{
  "id": "prop-var-identite",
  "level": "2",
  "url": "sec-espvaralea.html#prop-var-identite",
  "type": "Proposition",
  "number": "2.91",
  "title": "",
  "body": "  Soient     avec égalité si et seulement si est presque partout constante.              Si et sont indépendantes alors .      "
},
{
  "id": "thm-varcovar",
  "level": "2",
  "url": "sec-espvaralea.html#thm-varcovar",
  "type": "Théorème",
  "number": "2.92",
  "title": "",
  "body": "   est une forme bilinéaire symétrique positive de . L'inégalité de Cauchy-Schwarz pour cette forme s'écrit : avec égalité si et seulement si est presque partout constante ou s'il existe des réels et tels que presque partout.   "
},
{
  "id": "prop-varcovar",
  "level": "2",
  "url": "sec-espvaralea.html#prop-varcovar",
  "type": "Proposition",
  "number": "2.93",
  "title": "",
  "body": "  Soient des variables aleátoires discrètes de carrés sommables. Si sont deux à deux indépendantes alors en particulier    "
},
{
  "id": "def-ecarttype-covariance",
  "level": "2",
  "url": "sec-espvaralea.html#def-ecarttype-covariance",
  "type": "Définition",
  "number": "2.94",
  "title": "",
  "body": "   écart-type de la VADR       coefficient de corrélation des VADR  et     Soiente et des variables aléatoires de carrés sommables.   On appelle écart-type de le réel .    On suppose que et ne sont pas presque partout constantes. On appelle coefficient de corrélation de et le réel       "
},
{
  "id": "subsubsec-varcovar-10",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-varcovar-10",
  "type": "Remarque",
  "number": "2.95",
  "title": "",
  "body": "    est une semi-norme de . Pour tout , si et seulement si est presque partout constante.    Si on dit que les variables aléatoires et sont non corrélées . C'est le cas par exemple si elles sont indépendantes.  La non corrélation est une sorte «d'orthogonalité» pour la forme bilinéaire symétrique .    Si et ne sont pas presque partout constantes, selon l'inégalité de Cauchy-Schwarz, on a avec égalité si et seulement s'il existe des réels et tels que presque partout avec si et si . On dit que et sont linéairement corrélées (positivément ou négativement selon le signe de ).  Plus est voisin de plus les variables et sont «positivement» corrélées. Plus il est voisin de plus elles sont «négativement» corrélées.    Une VADR  est dite centrée si . Elle est dite centrée réduite si elle est centrée et .  Pour toute VADR  non partout constante, la VADR  est centrée réduite.      "
},
{
  "id": "subsubsec-varcovar-11",
  "level": "2",
  "url": "sec-espvaralea.html#subsubsec-varcovar-11",
  "type": "Exploration",
  "number": "2.17",
  "title": "Matrice des covariances d’un vecteur aléatoire.",
  "body": "Matrice des covariances d'un vecteur aléatoire    matrice des covariances du vecteur aléatoire   On considère des VADR  . On appelle matrice des covariances du vecteur la matrice carrée de taille dont les coefficients sont . est la matrice de Gram de la famille pour la forme bilinéaire symétrique .  Pour tout , on a où (voir l'activité ). On en déduit par exemple que est presque partout constante si et seulement si .   est une matrice symétrique positive. Elle est en particulier orthogonalemnt diagonalisable et ses valeurs propres sont positives ou nulles. Une base orthonormale de vecteurs propres peut servir à construire une base de l'espace vectoriel engendré par formée de VADR  deux à deux non corrélées . En outre les vecteurs dans cette base qui sont associés à la valeur propre nulle sont des VADR presque partout constantes. Ce qui permet de représenter tout élément de à une VADR presque partout constante près comme une combinaison linéaire de  VADR non partout constantes et deux à deux non corrélées. Ces observations sont essentielles dans ce qu'on appelle Analyse en Composantes Principales (ACP). Voir pour cela :   la définition sur Wikipedia     un document plus technique est plus détaillé sur le web    D'autre propriétés de la matrices de covariances seront en outre explorées dans les activités et   "
},
{
  "id": "list-var",
  "level": "2",
  "url": "sec-espvaralea.html#list-var",
  "type": "Liste",
  "number": "2.96",
  "title": "Variances des lois usuelles.",
  "body": " Variances des lois usuelles.   On considère une VADR  .     Loi uniforme  Si à valeurs dans alors .  En général si suit une loi uniforme à valeurs dans alors     Loi de Bernouilli  Si alors     Loi binomiale  Si alors     Loi géometrique  Si alors     Loi de Poisson  Si alors .    "
},
{
  "id": "matrice-covariance-vecteur-aleatoire",
  "level": "2",
  "url": "sec-espvaralea.html#matrice-covariance-vecteur-aleatoire",
  "type": "Activité",
  "number": "2.18",
  "title": "Matrice des covariances d’un vecteur aléatoire.",
  "body": " Matrice des covariances d'un vecteur aléatoire   Dans cette activité, nous étudions la matrice des covariances d'un vecteur aléatoire discret à valeurs dans . Nous allons explorer les propriétés de cette matrice et en donner une application.  On dit que admet un moment d'ordre si ses composantes en admettent. On suppose que admet un moment d'ordre et on pose par définition             est une matrice symétrique réelle d'ordre appelée matrice des covariances du vecteur .    Symétrie et positivité   Soit . Montrer que : et en déduire que est une matrice symétrique positive.    Par bilinéarité de la covariance on a le développement : Un résultat usuel d'un autre côte donne donc . La matrice qui est naturellement symétrique est donc positive puisque cette dernière égalité prouve que      Une expression de la matrice des covariances   Montrer que : En déduire que si alors et qu'en particulier     On observe que Donc : Si alors et donc .      Transformation linéaire d'un vecteur aléatoire   Soient une matrice et un vecteur colonne. On considère le vecteur aléatoire .  Montrer que admet des moments d'ordre 2.  Montrer que : dans cette relation on peut remplacer par un vecteur aléatoire à valeurs dans un -ev de dimension finie quelconque et par une application linéaire définie sur cet espace et à valeurs dans un autre espace , le vecteur éant pris dans . Elle s'écrit alors On admet cette dernière propriété.  Montrer que la matrice des covariances de est donnée par :         Comme admet des moments d'ordre 2, chaque composante admet une variance finie. Chaque composante du vecteur est une combinaison linéaire des , donc admet également des moments d'ordre 2.  Par linéarité de l'espérance, on a :   La matrice des covariances de est donnée par : Donc d'après la relation précédente sur l'espérance           Toute matrice symétrique positive est une matrice de covariances   Soit une matrice symétrique positive. Montrer qu'il existe un vecteur aléatoire tel que .    Comme est symétrique positive, il existe une matrice symétrique positive telle que : . Soit un vecteur aléatoire dont les composantes sont des variables aléatoires indépendantes de variance 1. On a et donc le vecteur a pour matrice des covariances :       Produit d'Hadamard et indépendance   Soient et deux vecteurs aléatoires de carrés sommables, centrés et indépendants. On définit le produit d'Hadamard de deux matrices de même tailles par Montrer que :     Comme et sont indépendants alors pour tout couple d'indices , et indépendant de et donc . En outre, est indépendant de par coalition. On a alors : Ce qui montre que .      Produit d'Hadamard de matrices symétriques positives   En déduire que le produit d'Hadamard de deux matrices symétriques positives est une matrice symétrique positive.    Soient et deux matrices symétriques positives. D'après la question précédente, il existe des vecteurs aléatoires et tels que et . Alors, , qui est une matrice des covariances, donc symétrique positive.    "
},
{
  "id": "esperance-forme-quadratique",
  "level": "2",
  "url": "sec-espvaralea.html#esperance-forme-quadratique",
  "type": "Activité",
  "number": "2.19",
  "title": "Espérance d’une forme quadratique.",
  "body": " Espérance d'une forme quadratique   Soit un vecteur aléatoire de ayant un moment d'ordre . On note la matrice des covariances de et son espérance.  L'activité propose de montrer la formule dite formule des formes quadratiques et quelques exemples d'application ensuite.    Formule des formes quadratiques   Soit une matrice carrée constante. Démontrer la formule :     Soit un vecteur aléatoire de dimension , de moyenne et de matrice de covariance . Soit une matrice carrée de taille .  Nous voulons calculer . Pour cela, décomposons en sa moyenne et son écart par rapport à la moyenne . Ainsi, , où et .  En substituant dans la forme quadratique, nous obtenons :   Développons cette expression :   Prenons l'espérance des deux côtés. Comme , les termes linéaires en disparaissent :   Il reste à calculer . Notons que est un scalaire, donc égal à sa trace :   En utilisant la propriété de cyclicité de la trace ( ), nous avons :   En prenant l'espérance, nous obtenons :   Or, , donc :   En combinant ce résultat avec l'expression précédente, nous obtenons finalement :   Ce qui conclut la démonstration.      Modèle de portefeuille binaire   Objectif : Comprendre comment les formes quadratiques peuvent modéliser les interactions entre actifs dans un portefeuille binaire.   Vous gérez un portefeuille de 3 actifs binaires. Chaque actif peut être actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . Les actifs peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les interactions entre les actifs du portefeuille. Chaque élément quantifie l'influence de l'actif sur l'actif . Par exemple, signifie que l'actif 2 influence l'actif 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque actif.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes de risque du portefeuille.      Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : Une espérance plus élevée indique un portefeuille plus risqué.       Réseau aléatoire avec interactions binaires   Objectif : Explorer comment les formes quadratiques peuvent modéliser les connexions dans un réseau aléatoire.   Vous étudiez un réseau de 4 nœuds, où chaque nœud est actif ( ) avec une probabilité ou inactif ( ) avec une probabilité . La matrice représente les connexions entre les nœuds.   Données :     ,   ,   ,   .   les variables sont supposés inépendantes.   La matrice de connexion .    Rôle de la matrice de connexion  La matrice représente les connexions entre les nœuds du réseau. Chaque élément vaut 1 si les nœuds et sont connectés, et 0 sinon. Par exemple, signifie que les nœuds 1 et 2 sont connectés. Les éléments diagonaux sont fixés à 0 pour indiquer qu'un nœud n'est pas connecté à lui-même.   Representation du réseaux étudié      Tâches :    Calculez en utilisant la formule .  Interprétez le résultat en termes de nombre attendu de paires de nœuds actifs connectés.      Solution :     Calcul de :   La matrice de covariance est diagonale car les variables sont indépendantes :    (car a des zéros sur la diagonale),   ,   .     Interprétation : En moyenne, 3.42 paires de nœuds actifs sont connectées dans le réseau.       Modèle de vote avec dépendances   Objectif : Analyser comment les formes quadratiques peuvent modéliser les influences entre électeurs dans un système de vote.   Vous étudiez un système de vote avec 3 électeurs. Chaque électeur vote pour un candidat ( ) avec une probabilité ou s'abstient ( ) avec une probabilité . Les votes peuvent être corrélés.   Données :     ,   ,   .  La corrélation entre et est , et est indépendant des deux autres.  La matrice de pondération .    Rôle de la matrice de pondération  La matrice représente les influences entre les électeurs. Chaque élément quantifie l'influence de l'électeur sur l'électeur . Par exemple, signifie que l'électeur 2 influence l'électeur 1 avec un poids de 0.5. Les éléments diagonaux représentent l'importance intrinsèque de chaque électeur.    Tâches :    Calculez la matrice de covariance .  Calculez en utilisant la formule .  Interprétez le résultat en termes d'influence des électeurs sur le résultat du vote.      Solution :     Matrice de covariance :     Calcul de :    ,   ,   .     Interprétation : L'espérance élevée reflète une forte influence des électeurs corrélés sur le résultat du vote.     "
},
{
  "id": "def-moments",
  "level": "2",
  "url": "sec-espvaralea.html#def-moments",
  "type": "Définition",
  "number": "2.98",
  "title": "",
  "body": "  Soient une VADR et . On dit que est -sommable si la variable est sommable. L'espéance est alors appelée moment d'ordre de .  On notera l'ensemble des VADR  -sommables de .   "
},
{
  "id": "sec-fctgen",
  "level": "1",
  "url": "sec-fctgen.html",
  "type": "Section",
  "number": "2.4",
  "title": "Fonctions génératrices",
  "body": " Fonctions génératrices   Définition et propriétés   Fonction génératrice    fonction génératrice de la VADR    La fonction génératrice d'une variable aléatoire à valeurs dans est définie par On notera le rayon de convergence de la série entière     Soit une variable aléatoire à valeurs dans .    Puisque la série est convergente de somme alors et .    La loi de est entièrement déterminée par sa fonction génératrice , dans le sens où si et sont des VAD à valeurs dans alors Noter aussi que dans ce cas et ont les mêmes moments, en particulier la même espérance.    Si est fini alors est polynomiale de degré .    Si alors admet des moments à tout ordre et pour tout  Noter donc que l'hypothèse simplifie considérablement la justificiation du enoncé ci-dessus.   Si alors est infiniment dérivable en et pour tout  La série est donc convergente ce qui signifie par théorème de transfert que la variable est sommable et que . Comme est une combinaison linéaire de variables de la forme alors est sommable et s'exprime en fonction des dérivées pour .      du à Abel   Soit une série entière à coefficients réels positifs qu'on suppose de rayon de convergence . On note sa somme. Alors pour tout  est -fois dérivable en si et seulement si la série converge et dans ce cas     Fonction génératrice de la somme de deux variables indépendantes   Soient et deux variables aléatoires à valeurs dans . Si et sont indépendantes alors .      Si sont des variables aléatoires mutuellement indépendantes à valeurs dans alors     Expression de l'espérance et de la variance à l'aide la fonction génératrice   Soit une variable aléatoire à valeurs dans .    est sommable si et seulement si est dérivable en et dans ce cas .     est de carré sommable si et seulement si est deux fois dérivable en et dans ce cas .        des moments factoriels   Soit une VAD à valeurs dans . Pour tout , est -sommable si et seulement si est -fois dérivable en et dans ce cas L'espérance est appelée moment factoriel d'ordre de .      Fonctions génératrices des lois usuelles    Loi uniforme  Si à valeurs dans alors .   Loi de Bernouilli  Si alors    Loi binomiale  Si alors .   Loi géométrique  Si alors .   Loi de Poisson  Si alors .       Concept de fonction génératrice   Fonction génératrice d'une suite  Pour toute suite réelle ou complexe on appelle série génératrice de , la série entière . Si le rayon de convergence de celle-ci est non nul, on appelle sa somme fonction génératrice de la suite .  On appelle aussi, série génératrice exponentielle de , la série entière . Celle-ci a plus de chance d'avoir un rayon de convergence non nul que   Si on connaît la fonction génératrice d'une suite alors on peut retrouver la suite en calculant le développement de Taylor de . D'où l'utilité des fonctions génératrices : si une suite est définie par une relation de récurrence alors on traduit, dans certains cas, cette relation en une équation fonctionnelle ou différentielle de la fonction génératrice. Résoudre cette équation nous permet ensuite d'identifier l'expression explicite des termes de la suite.  La fonction génératrice d'une VAD à valeurs dans est ainsi la fonction génératrice de la suite , ie de la loi de .   Fonction génératrice des coefficients binomiaux  On sait que pour tout réels  La fonction est donc la fonction génératrice des coefficients binomiaux .  Comme application, on peut écrire pour tous , et en identifiant les coefficients des développements en séries de Taylor des deux membres de cette égalité on obtient C'est la formule de Vandermonde.  Dans le même ordre d'idée on sait que pour tout entier  donc en identifiant les développements des deux côtés dans l'égalité suivante on obtient pour tout  Cette dernière formule est antagoniste avec la formule de Vandermonde dans le sens où ce sont les indices supérieurs des coefficients binomaux qui changent en fonction de l'indice de sommation.    Somme de variables de Poisson MI  Soient des variables aléatoires MI suivant des lois de Poissons de paramètre respectifs . On note . On veut déterminer la loi de .  On a pour tout  On en déduit que suit la loi de poisson où .  Ce résultat s'interprète par le fait que le nombre de clients servi par unité de temps dans une file d'attente qui comporte guichets indépendants est une variable aléatoire suivant une loi de Poisson de paramètre .   Une formule d'inversion  Soit une VAD à valeurs dans . On suppose que . Alors est développable en série de taylor en , ie où désigne la variable aléatoire définie par Grâce à la convergence absolue de la série à droite dans l'égalité précédente pour voisin de , on peut appliquer la formule de Fubini pour transformer l'expression de  et par identification de ce développement avec celui par défaut de on obtient Théoriquement, ces formules permettent donc de calculer la loi de connaissant les moyennes de toutes les variables .Par exemple   Noter que si est fini alors la variable et nulle pour tout supérieur à et donc que qu'on peut lier aux relations obtenues par formule de transfert      Activités   Fonction génératrice de la suite   On considère une VAD à valeurs dans et on pose pour tout     Expression de   Justifier que est bien définie et montrer que      Expression de l'espérance de   En déduire que est sommable si et seulement si admet une limite finie en et que dans ce cas     Loi du   Soient et deux VAD sommables et indépendantes à valeurs dans et soit . Exprimer en fonction de et de . En déduire que pour tout  Simplifier cette expression dans le cas où et suivent la même loi.    Pour tout  D'autre part, par produit de Cauchy de deux séries absolument convergentes, pour un fixé et un quelconque Comme alors pour tout  Puisque , la série est convergente alors la série de fonctions continues converge normalement sur le ségment . On peut donc intégrer terme à terme l'égalité précédente. Ce qui donne. et comme pour tout alors est nulle sauf lorsque est paire et . Alors et finalement Dans le cas où et suivent la même loi alors et donc       Fonction génératrice du premier retour à l'origine   Dans cette activité, nous étudions une marche aléatoire biaisée sur une droite. À chaque pas, l'objet avance d'un pas avec une probabilité ou recule d'un pas avec une probabilité . Sachant qu'à l'instant l'objet est à l'origine, on note le temps d'attente du premier retour à l'origine et la position de l'objet à l'instant .  L'objectif est de trouver une relation entre les fonctions génératrices et de calculer ensuite . On notera que n'est pas la fonction génératrice de la variable puisque celle-ci peut potentiellement prendre la valeur .     Définition des fonctions génératrices   Expliquer pourquoi et sont bien définies pour .    Les fonctions génératrices et sont les sommes de séries entières dont les coefficients sont des probabilités (donc compris entre 0 et 1). Par conséquents leurs rayons de convergences sont supérieurs ou égaux à .      Relation entre et   Montrer que les fonctions génératrices et sont liées par la relation : En déduire une expression de en fonction de .    On peut écrire pour tout : «Intuitivement» : car il s'agit de revenir à l'origine en pas une fois le retour à l'origine s'est produit pour la première fois à l'instant . Donc Plus rigoureusement, on peut écrire Maintenant si note le déplacement de l'objet à l'instant alors le couple est une fonction des variables et est une fonction des variables . Donc et sont indépendants par coalition. En outre suit la même loi que . Ainsi En multipliant par et en sommant sur , on obtient : En résolvant pour , on trouve :       Calcul de   Calculer la fonction génératrice en utilisant la loi de . On rappelle que suit une loi binomiale décalée : où suit une loi binomiale .    La probabilité que est donnée par : Comme suit une loi binomiale , on a : Ainsi, pour pair, , et pour impair, . La fonction génératrice est donc : On pose , de telle sorte qu'on puisse écrire et en utilisant le développement en série entière de        Expression de   En utilisant les résultats des questions précédentes, donner une expression explicite de la fonction génératrice .    D'après la question 2, on a : En utilisant l'expression de obtenue à la question 3, on trouve :       Calcul de la probabilité du retour vers l'origine   Calculer la probabilité du retour vers l'origine.    La probabilité du retour vers l'origine est .      Fonction caractéristique d'une variable aléatoire à valeurs dans    fonction caractéristique de la VADR     Dans cette activité, nous étudions la fonction caractéristique d'une variable aléatoire à valeurs dans . La fonction caractéristique est un outil puissant en probabilités, permettant de caractériser la loi d'une variable aléatoire et de simplifier certains calculs. Nous allons définir cette fonction, explorer ses propriétés, et l'utiliser pour calculer des moments et des probabilités.     Définition de la fonction caractéristique   Soit une variable aléatoire à valeurs dans . On définit sa fonction caractéristique par : où .    Montrer que est bien définie pour tout .  Montrer que est -périodique et continue sur .        La fonction caractéristique est bien définie pour tout , car et donc est sommable.  Les fonctions sont -périodiques, donc est également -périodique. En outre, on peut écrire Les sommes des deux séries dans cette expression sont continues par convergence normale sur . D'où la continuité de sur .        Exemples de fonctions caractéristiques   Calculer la fonction caractéristique pour les lois suivantes :  Si (loi binomiale), montrer que :   Si (loi géométrique), montrer que :   Si (loi de Poisson), montrer que :         Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :         Dérivation et moments     Montrer que si admet un moment d'ordre , alors est de classe et :   Montrer que si admet des moments à tout ordre et s'il existe des constantes telles que alors est développable en série entière sur et         Si admet un moment d'ordre , alors la série converge pour tout . Par le théorème de dérivation terme à terme, est de classe , et :   Si admet des moments à tout ordre et que la série génératrice converge, alors par l'inégalité de Taylor-Lagrange appliquée à , on a : En multipliant par et en sommant sur , on obtient : Ainsi, .        "
},
{
  "id": "def-fctgen",
  "level": "2",
  "url": "sec-fctgen.html#def-fctgen",
  "type": "Définition",
  "number": "2.99",
  "title": "Fonction génératrice.",
  "body": " Fonction génératrice    fonction génératrice de la VADR    La fonction génératrice d'une variable aléatoire à valeurs dans est définie par On notera le rayon de convergence de la série entière   "
},
{
  "id": "subsec-defprop-3",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-3",
  "type": "Remarque",
  "number": "2.100",
  "title": "",
  "body": " Soit une variable aléatoire à valeurs dans .    Puisque la série est convergente de somme alors et .    La loi de est entièrement déterminée par sa fonction génératrice , dans le sens où si et sont des VAD à valeurs dans alors Noter aussi que dans ce cas et ont les mêmes moments, en particulier la même espérance.    Si est fini alors est polynomiale de degré .    Si alors admet des moments à tout ordre et pour tout  Noter donc que l'hypothèse simplifie considérablement la justificiation du enoncé ci-dessus.   Si alors est infiniment dérivable en et pour tout  La série est donc convergente ce qui signifie par théorème de transfert que la variable est sommable et que . Comme est une combinaison linéaire de variables de la forme alors est sommable et s'exprime en fonction des dérivées pour .     "
},
{
  "id": "lem-abel",
  "level": "2",
  "url": "sec-fctgen.html#lem-abel",
  "type": "Lemme",
  "number": "2.101",
  "title": "du à Abel.",
  "body": "du à Abel   Soit une série entière à coefficients réels positifs qu'on suppose de rayon de convergence . On note sa somme. Alors pour tout  est -fois dérivable en si et seulement si la série converge et dans ce cas    "
},
{
  "id": "subsec-defprop-5",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-5",
  "type": "Théorème",
  "number": "2.102",
  "title": "Fonction génératrice de la somme de deux variables indépendantes.",
  "body": "Fonction génératrice de la somme de deux variables indépendantes   Soient et deux variables aléatoires à valeurs dans . Si et sont indépendantes alors .   "
},
{
  "id": "subsec-defprop-6",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-6",
  "type": "Corollaire",
  "number": "2.103",
  "title": "",
  "body": "  Si sont des variables aléatoires mutuellement indépendantes à valeurs dans alors    "
},
{
  "id": "subsec-defprop-7",
  "level": "2",
  "url": "sec-fctgen.html#subsec-defprop-7",
  "type": "Théorème",
  "number": "2.104",
  "title": "Expression de l’espérance et de la variance à l’aide la fonction génératrice.",
  "body": "Expression de l'espérance et de la variance à l'aide la fonction génératrice   Soit une variable aléatoire à valeurs dans .    est sommable si et seulement si est dérivable en et dans ce cas .     est de carré sommable si et seulement si est deux fois dérivable en et dans ce cas .      "
},
{
  "id": "theo-momfact",
  "level": "2",
  "url": "sec-fctgen.html#theo-momfact",
  "type": "Théorème",
  "number": "2.105",
  "title": "des moments factoriels.",
  "body": " des moments factoriels   Soit une VAD à valeurs dans . Pour tout , est -sommable si et seulement si est -fois dérivable en et dans ce cas L'espérance est appelée moment factoriel d'ordre de .   "
},
{
  "id": "subsec-generatrices-usuelles-2",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrices-usuelles-2",
  "type": "Liste",
  "number": "2.106",
  "title": "",
  "body": "  Loi uniforme  Si à valeurs dans alors .   Loi de Bernouilli  Si alors    Loi binomiale  Si alors .   Loi géométrique  Si alors .   Loi de Poisson  Si alors .    "
},
{
  "id": "subsec-generatrice-2",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-2",
  "type": "Exploration",
  "number": "2.20",
  "title": "Fonction génératrice d’une suite.",
  "body": " Fonction génératrice d'une suite  Pour toute suite réelle ou complexe on appelle série génératrice de , la série entière . Si le rayon de convergence de celle-ci est non nul, on appelle sa somme fonction génératrice de la suite .  On appelle aussi, série génératrice exponentielle de , la série entière . Celle-ci a plus de chance d'avoir un rayon de convergence non nul que   Si on connaît la fonction génératrice d'une suite alors on peut retrouver la suite en calculant le développement de Taylor de . D'où l'utilité des fonctions génératrices : si une suite est définie par une relation de récurrence alors on traduit, dans certains cas, cette relation en une équation fonctionnelle ou différentielle de la fonction génératrice. Résoudre cette équation nous permet ensuite d'identifier l'expression explicite des termes de la suite.  La fonction génératrice d'une VAD à valeurs dans est ainsi la fonction génératrice de la suite , ie de la loi de .  "
},
{
  "id": "subsec-generatrice-3",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-3",
  "type": "Exemple",
  "number": "2.107",
  "title": "Fonction génératrice des coefficients binomiaux.",
  "body": "Fonction génératrice des coefficients binomiaux  On sait que pour tout réels  La fonction est donc la fonction génératrice des coefficients binomiaux .  Comme application, on peut écrire pour tous , et en identifiant les coefficients des développements en séries de Taylor des deux membres de cette égalité on obtient C'est la formule de Vandermonde.  Dans le même ordre d'idée on sait que pour tout entier  donc en identifiant les développements des deux côtés dans l'égalité suivante on obtient pour tout  Cette dernière formule est antagoniste avec la formule de Vandermonde dans le sens où ce sont les indices supérieurs des coefficients binomaux qui changent en fonction de l'indice de sommation.  "
},
{
  "id": "subsec-generatrice-4",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-4",
  "type": "Exemple",
  "number": "2.108",
  "title": "Somme de variables de Poisson MI.",
  "body": " Somme de variables de Poisson MI  Soient des variables aléatoires MI suivant des lois de Poissons de paramètre respectifs . On note . On veut déterminer la loi de .  On a pour tout  On en déduit que suit la loi de poisson où .  Ce résultat s'interprète par le fait que le nombre de clients servi par unité de temps dans une file d'attente qui comporte guichets indépendants est une variable aléatoire suivant une loi de Poisson de paramètre .  "
},
{
  "id": "subsec-generatrice-5",
  "level": "2",
  "url": "sec-fctgen.html#subsec-generatrice-5",
  "type": "Exemple",
  "number": "2.109",
  "title": "Une formule d’inversion.",
  "body": "Une formule d'inversion  Soit une VAD à valeurs dans . On suppose que . Alors est développable en série de taylor en , ie où désigne la variable aléatoire définie par Grâce à la convergence absolue de la série à droite dans l'égalité précédente pour voisin de , on peut appliquer la formule de Fubini pour transformer l'expression de  et par identification de ce développement avec celui par défaut de on obtient Théoriquement, ces formules permettent donc de calculer la loi de connaissant les moyennes de toutes les variables .Par exemple   Noter que si est fini alors la variable et nulle pour tout supérieur à et donc que qu'on peut lier aux relations obtenues par formule de transfert   "
},
{
  "id": "fonction-generatrice-xsup",
  "level": "2",
  "url": "sec-fctgen.html#fonction-generatrice-xsup",
  "type": "Activité",
  "number": "2.21",
  "title": "Fonction génératrice de la suite <span class=\"process-math\">\\((\\Pr{X\\geq n})_n\\)<\/span>.",
  "body": " Fonction génératrice de la suite   On considère une VAD à valeurs dans et on pose pour tout     Expression de   Justifier que est bien définie et montrer que      Expression de l'espérance de   En déduire que est sommable si et seulement si admet une limite finie en et que dans ce cas     Loi du   Soient et deux VAD sommables et indépendantes à valeurs dans et soit . Exprimer en fonction de et de . En déduire que pour tout  Simplifier cette expression dans le cas où et suivent la même loi.    Pour tout  D'autre part, par produit de Cauchy de deux séries absolument convergentes, pour un fixé et un quelconque Comme alors pour tout  Puisque , la série est convergente alors la série de fonctions continues converge normalement sur le ségment . On peut donc intégrer terme à terme l'égalité précédente. Ce qui donne. et comme pour tout alors est nulle sauf lorsque est paire et . Alors et finalement Dans le cas où et suivent la même loi alors et donc     "
},
{
  "id": "fonction-generatrice-premier-retour",
  "level": "2",
  "url": "sec-fctgen.html#fonction-generatrice-premier-retour",
  "type": "Activité",
  "number": "2.22",
  "title": "Fonction génératrice du premier retour à l’origine.",
  "body": " Fonction génératrice du premier retour à l'origine   Dans cette activité, nous étudions une marche aléatoire biaisée sur une droite. À chaque pas, l'objet avance d'un pas avec une probabilité ou recule d'un pas avec une probabilité . Sachant qu'à l'instant l'objet est à l'origine, on note le temps d'attente du premier retour à l'origine et la position de l'objet à l'instant .  L'objectif est de trouver une relation entre les fonctions génératrices et de calculer ensuite . On notera que n'est pas la fonction génératrice de la variable puisque celle-ci peut potentiellement prendre la valeur .     Définition des fonctions génératrices   Expliquer pourquoi et sont bien définies pour .    Les fonctions génératrices et sont les sommes de séries entières dont les coefficients sont des probabilités (donc compris entre 0 et 1). Par conséquents leurs rayons de convergences sont supérieurs ou égaux à .      Relation entre et   Montrer que les fonctions génératrices et sont liées par la relation : En déduire une expression de en fonction de .    On peut écrire pour tout : «Intuitivement» : car il s'agit de revenir à l'origine en pas une fois le retour à l'origine s'est produit pour la première fois à l'instant . Donc Plus rigoureusement, on peut écrire Maintenant si note le déplacement de l'objet à l'instant alors le couple est une fonction des variables et est une fonction des variables . Donc et sont indépendants par coalition. En outre suit la même loi que . Ainsi En multipliant par et en sommant sur , on obtient : En résolvant pour , on trouve :       Calcul de   Calculer la fonction génératrice en utilisant la loi de . On rappelle que suit une loi binomiale décalée : où suit une loi binomiale .    La probabilité que est donnée par : Comme suit une loi binomiale , on a : Ainsi, pour pair, , et pour impair, . La fonction génératrice est donc : On pose , de telle sorte qu'on puisse écrire et en utilisant le développement en série entière de        Expression de   En utilisant les résultats des questions précédentes, donner une expression explicite de la fonction génératrice .    D'après la question 2, on a : En utilisant l'expression de obtenue à la question 3, on trouve :       Calcul de la probabilité du retour vers l'origine   Calculer la probabilité du retour vers l'origine.    La probabilité du retour vers l'origine est .    "
},
{
  "id": "fonction-caracteristique-conversion",
  "level": "2",
  "url": "sec-fctgen.html#fonction-caracteristique-conversion",
  "type": "Activité",
  "number": "2.23",
  "title": "Fonction caractéristique d’une variable aléatoire à valeurs dans <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Fonction caractéristique d'une variable aléatoire à valeurs dans    fonction caractéristique de la VADR     Dans cette activité, nous étudions la fonction caractéristique d'une variable aléatoire à valeurs dans . La fonction caractéristique est un outil puissant en probabilités, permettant de caractériser la loi d'une variable aléatoire et de simplifier certains calculs. Nous allons définir cette fonction, explorer ses propriétés, et l'utiliser pour calculer des moments et des probabilités.     Définition de la fonction caractéristique   Soit une variable aléatoire à valeurs dans . On définit sa fonction caractéristique par : où .    Montrer que est bien définie pour tout .  Montrer que est -périodique et continue sur .        La fonction caractéristique est bien définie pour tout , car et donc est sommable.  Les fonctions sont -périodiques, donc est également -périodique. En outre, on peut écrire Les sommes des deux séries dans cette expression sont continues par convergence normale sur . D'où la continuité de sur .        Exemples de fonctions caractéristiques   Calculer la fonction caractéristique pour les lois suivantes :  Si (loi binomiale), montrer que :   Si (loi géométrique), montrer que :   Si (loi de Poisson), montrer que :         Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :   Pour , la fonction caractéristique est :         Dérivation et moments     Montrer que si admet un moment d'ordre , alors est de classe et :   Montrer que si admet des moments à tout ordre et s'il existe des constantes telles que alors est développable en série entière sur et         Si admet un moment d'ordre , alors la série converge pour tout . Par le théorème de dérivation terme à terme, est de classe , et :   Si admet des moments à tout ordre et que la série génératrice converge, alors par l'inégalité de Taylor-Lagrange appliquée à , on a : En multipliant par et en sommant sur , on obtient : Ainsi, .      "
},
{
  "id": "sec-probas--actinum",
  "level": "1",
  "url": "sec-probas--actinum.html",
  "type": "Section",
  "number": "2.5",
  "title": "Activités numériques",
  "body": " Activités numériques   Exploration graphique   Représentation graphique de lois usuelles  Dans cette subsection on ne s'interesse qu'au comportement graphique des fonctions de masse de certaines lois discrètes. Il ne sera pas encore question de numériquement simuler des variables aléatoires.   Exploration de la loi binomiale   Dans cette activité, vous allez explorer comment les paramètres (nombre d'essais) et (probabilité de succès) influencent la forme de la distribution binomiale. Vous pourrez choisir différentes valeurs de et et observer l'histogramme correspondant.     Utiliser les curseurs ci-dessous pour choisir les valeurs de et , puis observer comment l'histogramme de la loi binomiale évolue.  Donne une description sommaire de comportement de la distribution en fonction de la valeur du paramètre .   En modifiant les valeurs de et , observer comment la forme de la distribution binomiale change :  Si , la distribution est symétrique.  Si , la distribution est décalée vers la gauche.  Si , la distribution est décalée vers la droite.  Plus est grand, plus la distribution ressemble à une courbe en cloche (rappelant une distribution de Poisson).        Expliquer théoriquement vos observations    Considérons une variable . Pour on a la fonction est croissante et varie entre et en prenant la valeur en . Cela signifie que si alors tant que . Le maximum de est atteint donc en un point . Si ce maximum est atteint pour . Losque , pour tout ce qui signifie que le graphe de la distribution est symétrique par rapport au milieu . pour un fixé on a donc où . La fonction de masses reste croissante tant que et devient décroissante au delà. Son maximum ne peut être atteint qu'en et\/ou en .  Noter que si alors et si alors . Ce qui confirme le constat précédent en le précisant.      Comportement asymptotique d'une loi binomiale  Dans cette activité, on s'intéresse à la convergence de la loi binomiale vers la loi de Poisson lorsque le nombre d'essais devient grand.    Visualiser l'approximation de la loi binomiale par la loi de Poisson lorsque est grand.      Ce graphique affiche en bleu l'histogramme de la loi binomiale et en rouge la courbe de la loi de Poisson . Il permet de visualiser comment la distribution binomiale se rapproche de la distribution de Poisson lorsque devient grand.  Lorsque est grand et est petit, la distribution binomiale devient similaire à la distribution de Poisson . Cette visualisation interactive permet d'observer cette convergence.      Expliquer théoriquement vos observations    Voir        Échantillonage d'une loi discrète   Dans cette subsection on commencera à utiliser les fonctions offertes par les bibliothèques Python pour simuler des variables aléatoires et on essayera de comparer graphiquement leurs comportement avec celui des lois théoriques.   Loi binomiale   Utiliser les fonctions Python numpy.random.binomial et numpy.random.poisson pour générer des variables aléatoires qui suit la loi binomiale et la loi de Poisson. Écrire un script Python qui permet de modifier la taille de l'échantillon utilisé ainsi que les paramètres et et et qui trace intéractivement l'histogramme des proportions des valeurs réalisées par, au choix, l'une des deux variables simulées dans l'échantillon ainsi que la courbe de la loi théorique correspondante.         Loi Faible des grands nombres avec une loi géométrique   Dans cette subsection on essai de visualiser le conformance de la moyenne empirique sur un échantillon d'une loi géométrique avec la loi faible des grands nombre.      En utilisant la fonction numpy.random.geometric créer une variable qui suit la loi géométrique.  Écrire un script Python qui permet de changer intéractivement la valeur du paramètre de la taille N_max de l'échantillon et qui trace la courbe d'évolution de la moyenne des valeurs réalisées en fonction de la taille de l'échantillon.           Écrire un script qui permet de fixer intéractivement la valeur de la taille de l'échantillon et qui trace la courbe d'évolution de la moyenne empirique de la loi ainsi que celle de la fonction quand varie entre et .             Principe d'inversion et simulation de variables aléatoires discrètes   Base théorique   Dans cette subsection, nous allons étudier le principe d'inversion , une méthode mathématique pour simuler des variables aléatoires discrètes à partir d'une variable uniforme ( ).  Nous appliquerons ensuite ce principe à des lois discrètes usuelles (Bernoulli, binomiale, géométrique et Poisson) et implémenterons des simulations en Python.    Les résultats énoncés dans cette subsection ne font pas partie du programme officiel et doivent être taités comme des exercices d'approfondissement.    Principe d'inversion (énoncé mathématique)   Principe de l'inversion d'une loi  Soit une variable aléatoire réelle . La fonction de répartition de est définie par (voir ) : On pose pour tout   si est bijective alors . Noter que n'est jamais bijective dans le cas d'une variable discrète.  est appelé inverse généralisé de la fonction   Si , alors la variable aléatoire suit la même loi que .     Montrons d'abords que pour tous et  Soient et .  Si alors par définition de , .  Réciproquement, supposons que .   Si alors par caractérisation de la borne inférieure il existe tel que et et par croissante de on a donc .    Si , soit , il existe une suite décroissante qui converge vers et telle que pour tout . Par continuité à droite de en , la suite converge vers et donc .   Maintenant que est acquise, on en déduit que pour tout  mais comme alors pour tout et ainsi Alors suit la même loi que .     Cas où les valeurs de sont des points isolés   Soit une VADR dont l'ensemble des valeurs s'organise en une suite strictement croissante avec si est fini et sinon. On pose pour tout ,   Si pour un certain on a alors et donc l'evénement est vide. La formule reste donc valable dans ce cas.  Alors et pour tout      Pour , et pour tout      Si prend comme valeurs les termes d'une suite strictement croissantes de nombres réels , la probabilité pour la valeur se réalise est la même que si on tire un nombre selon la loi uniforme et qu'on cherche ensuite sa position dans la suite préalablement formée . La variable qui prend comme valeur l'indice tel que suit la même loi que .  Tous langage de programmation qui se respecte offre au moins une fonction pseudo-aléatoire qui simule le comportement de la loi . Trouver la position d'un nombre tiré selon cette loi dans une une liste croissante préetablie de nombres est un problème de tri. Un tri par insertion est parfaitement adapté à ce problème.  Il peut toutefois être plus rapide de trouver une expression théorique de et de l'implémenter directement comme une fonction.      Simulation numérique  Simulation d'une variable finie   On veut simuler une variable aléatoire discrète avec le principe d'inversion. Les données sont les suivantes : les valeurs prises par la variable sont les entiers de 1 à 10 avec la liste des probabilité probabilités respectives      Écrire un programme Python qui simule la variable. Visualiser graphiquement le bon fonctionnement du programme avec un échantillon de 1000 valeurs de la variable simulée. Toutes les fonctions de la biliothèque Numpy peuvent être utilisée. En particulier    np.random.uniform qui génère une variable aléatoire qui suit la loi ;     np.cumsum qui retourne la liste des «sommes cummulées» de la liste fournie ;     np.searchsorted qui permet de trouver l'indice d'un élément dans une liste ordonnée ;       Deux fonctions de simultions, la première utilise random.uniform de la bibliothèque numpy et la deuxième random de la bibliothèque . Vous pouver augmenter la valeur de N pour une meilleure qualité de la simulation.      Simulation des lois discrètes usuelles   Les objectifs de cette activité sont :  Comprendre le principe d'inversion et son fondement mathématique.  Appliquer ce principe pour simuler des variables aléatoires discrètes.  Implémenter des simulations en Python pour les lois Bernoulli, binomiale, géométrique et Poisson.      Simulation de la loi de Bernoulli     Écrire un programme Python pour simuler une variable de Bernoulli en utilisant le principe d'inversion.  Générer 1000 simulations et vérifier que la proportion de est proche de .       Code Python :       Simulation de la loi binomiale     Écrire un programme Python pour simuler une variable binomiale en fonction la variable de Bernouilli écrite dans le code précédent.  Générer 1000 simulations et comparer graphiquement la distribution obtenue avec la loi théorique.       Code Python :       Simulation de la loi géométrique      Simplifier le problème d'inversion d'une loi géométrique.   Écrire un programme Python pour la simuler.  Générer 1000 simulations et vérifier que la moyenne est proche de .            Simulation de la loi de Poisson     Écrire un programme Python pour simuler une variable de Poisson en utilisant le principe d'inversion.  Générer 1000 simulations et la comparer graphiquement avec la distribution théorique.              "
},
{
  "id": "subsec-graphbinomiale-3",
  "level": "2",
  "url": "sec-probas--actinum.html#subsec-graphbinomiale-3",
  "type": "Activité",
  "number": "2.24",
  "title": "Exploration de la loi binomiale.",
  "body": " Exploration de la loi binomiale   Dans cette activité, vous allez explorer comment les paramètres (nombre d'essais) et (probabilité de succès) influencent la forme de la distribution binomiale. Vous pourrez choisir différentes valeurs de et et observer l'histogramme correspondant.     Utiliser les curseurs ci-dessous pour choisir les valeurs de et , puis observer comment l'histogramme de la loi binomiale évolue.  Donne une description sommaire de comportement de la distribution en fonction de la valeur du paramètre .   En modifiant les valeurs de et , observer comment la forme de la distribution binomiale change :  Si , la distribution est symétrique.  Si , la distribution est décalée vers la gauche.  Si , la distribution est décalée vers la droite.  Plus est grand, plus la distribution ressemble à une courbe en cloche (rappelant une distribution de Poisson).        Expliquer théoriquement vos observations    Considérons une variable . Pour on a la fonction est croissante et varie entre et en prenant la valeur en . Cela signifie que si alors tant que . Le maximum de est atteint donc en un point . Si ce maximum est atteint pour . Losque , pour tout ce qui signifie que le graphe de la distribution est symétrique par rapport au milieu . pour un fixé on a donc où . La fonction de masses reste croissante tant que et devient décroissante au delà. Son maximum ne peut être atteint qu'en et\/ou en .  Noter que si alors et si alors . Ce qui confirme le constat précédent en le précisant.    "
},
{
  "id": "subsec-graphbinomiale-4",
  "level": "2",
  "url": "sec-probas--actinum.html#subsec-graphbinomiale-4",
  "type": "Activité",
  "number": "2.25",
  "title": "Comportement asymptotique d’une loi binomiale.",
  "body": " Comportement asymptotique d'une loi binomiale  Dans cette activité, on s'intéresse à la convergence de la loi binomiale vers la loi de Poisson lorsque le nombre d'essais devient grand.    Visualiser l'approximation de la loi binomiale par la loi de Poisson lorsque est grand.      Ce graphique affiche en bleu l'histogramme de la loi binomiale et en rouge la courbe de la loi de Poisson . Il permet de visualiser comment la distribution binomiale se rapproche de la distribution de Poisson lorsque devient grand.  Lorsque est grand et est petit, la distribution binomiale devient similaire à la distribution de Poisson . Cette visualisation interactive permet d'observer cette convergence.      Expliquer théoriquement vos observations    Voir     "
},
{
  "id": "subsec-histogramme-lois-usuelles-3",
  "level": "2",
  "url": "sec-probas--actinum.html#subsec-histogramme-lois-usuelles-3",
  "type": "Activité",
  "number": "2.26",
  "title": "Loi binomiale.",
  "body": "Loi binomiale   Utiliser les fonctions Python numpy.random.binomial et numpy.random.poisson pour générer des variables aléatoires qui suit la loi binomiale et la loi de Poisson. Écrire un script Python qui permet de modifier la taille de l'échantillon utilisé ainsi que les paramètres et et et qui trace intéractivement l'histogramme des proportions des valeurs réalisées par, au choix, l'une des deux variables simulées dans l'échantillon ainsi que la courbe de la loi théorique correspondante.      "
},
{
  "id": "subsec-lo-faible-3",
  "level": "2",
  "url": "sec-probas--actinum.html#subsec-lo-faible-3",
  "type": "Activité",
  "number": "2.27",
  "title": "",
  "body": "   En utilisant la fonction numpy.random.geometric créer une variable qui suit la loi géométrique.  Écrire un script Python qui permet de changer intéractivement la valeur du paramètre de la taille N_max de l'échantillon et qui trace la courbe d'évolution de la moyenne des valeurs réalisées en fonction de la taille de l'échantillon.           Écrire un script qui permet de fixer intéractivement la valeur de la taille de l'échantillon et qui trace la courbe d'évolution de la moyenne empirique de la loi ainsi que celle de la fonction quand varie entre et .         "
},
{
  "id": "subsec-basetheo-3",
  "level": "2",
  "url": "sec-probas--actinum.html#subsec-basetheo-3",
  "type": "Mise en garde",
  "number": "2.110",
  "title": "",
  "body": " Les résultats énoncés dans cette subsection ne font pas partie du programme officiel et doivent être taités comme des exercices d'approfondissement.  "
},
{
  "id": "thm-prininv",
  "level": "2",
  "url": "sec-probas--actinum.html#thm-prininv",
  "type": "Théorème",
  "number": "2.111",
  "title": "Principe d’inversion (énoncé mathématique).",
  "body": " Principe d'inversion (énoncé mathématique)   Principe de l'inversion d'une loi  Soit une variable aléatoire réelle . La fonction de répartition de est définie par (voir ) : On pose pour tout   si est bijective alors . Noter que n'est jamais bijective dans le cas d'une variable discrète.  est appelé inverse généralisé de la fonction   Si , alors la variable aléatoire suit la même loi que .     Montrons d'abords que pour tous et  Soient et .  Si alors par définition de , .  Réciproquement, supposons que .   Si alors par caractérisation de la borne inférieure il existe tel que et et par croissante de on a donc .    Si , soit , il existe une suite décroissante qui converge vers et telle que pour tout . Par continuité à droite de en , la suite converge vers et donc .   Maintenant que est acquise, on en déduit que pour tout  mais comme alors pour tout et ainsi Alors suit la même loi que .   "
},
{
  "id": "cor-prininv",
  "level": "2",
  "url": "sec-probas--actinum.html#cor-prininv",
  "type": "Corollaire",
  "number": "2.112",
  "title": "Cas où les valeurs de <span class=\"process-math\">\\(X\\)<\/span> sont des points isolés.",
  "body": " Cas où les valeurs de sont des points isolés   Soit une VADR dont l'ensemble des valeurs s'organise en une suite strictement croissante avec si est fini et sinon. On pose pour tout ,   Si pour un certain on a alors et donc l'evénement est vide. La formule reste donc valable dans ce cas.  Alors et pour tout      Pour , et pour tout      Si prend comme valeurs les termes d'une suite strictement croissantes de nombres réels , la probabilité pour la valeur se réalise est la même que si on tire un nombre selon la loi uniforme et qu'on cherche ensuite sa position dans la suite préalablement formée . La variable qui prend comme valeur l'indice tel que suit la même loi que .  Tous langage de programmation qui se respecte offre au moins une fonction pseudo-aléatoire qui simule le comportement de la loi . Trouver la position d'un nombre tiré selon cette loi dans une une liste croissante préetablie de nombres est un problème de tri. Un tri par insertion est parfaitement adapté à ce problème.  Il peut toutefois être plus rapide de trouver une expression théorique de et de l'implémenter directement comme une fonction.   "
},
{
  "id": "subsec-simulation-principe-inverse-2",
  "level": "2",
  "url": "sec-probas--actinum.html#subsec-simulation-principe-inverse-2",
  "type": "Activité",
  "number": "2.28",
  "title": "Simulation d’une variable finie.",
  "body": "Simulation d'une variable finie   On veut simuler une variable aléatoire discrète avec le principe d'inversion. Les données sont les suivantes : les valeurs prises par la variable sont les entiers de 1 à 10 avec la liste des probabilité probabilités respectives      Écrire un programme Python qui simule la variable. Visualiser graphiquement le bon fonctionnement du programme avec un échantillon de 1000 valeurs de la variable simulée. Toutes les fonctions de la biliothèque Numpy peuvent être utilisée. En particulier    np.random.uniform qui génère une variable aléatoire qui suit la loi ;     np.cumsum qui retourne la liste des «sommes cummulées» de la liste fournie ;     np.searchsorted qui permet de trouver l'indice d'un élément dans une liste ordonnée ;       Deux fonctions de simultions, la première utilise random.uniform de la bibliothèque numpy et la deuxième random de la bibliothèque . Vous pouver augmenter la valeur de N pour une meilleure qualité de la simulation.     "
},
{
  "id": "subsec-simulation-principe-inverse-3",
  "level": "2",
  "url": "sec-probas--actinum.html#subsec-simulation-principe-inverse-3",
  "type": "Activité",
  "number": "2.29",
  "title": "Simulation des lois discrètes usuelles.",
  "body": "Simulation des lois discrètes usuelles   Les objectifs de cette activité sont :  Comprendre le principe d'inversion et son fondement mathématique.  Appliquer ce principe pour simuler des variables aléatoires discrètes.  Implémenter des simulations en Python pour les lois Bernoulli, binomiale, géométrique et Poisson.      Simulation de la loi de Bernoulli     Écrire un programme Python pour simuler une variable de Bernoulli en utilisant le principe d'inversion.  Générer 1000 simulations et vérifier que la proportion de est proche de .       Code Python :       Simulation de la loi binomiale     Écrire un programme Python pour simuler une variable binomiale en fonction la variable de Bernouilli écrite dans le code précédent.  Générer 1000 simulations et comparer graphiquement la distribution obtenue avec la loi théorique.       Code Python :       Simulation de la loi géométrique      Simplifier le problème d'inversion d'une loi géométrique.   Écrire un programme Python pour la simuler.  Générer 1000 simulations et vérifier que la moyenne est proche de .            Simulation de la loi de Poisson     Écrire un programme Python pour simuler une variable de Poisson en utilisant le principe d'inversion.  Générer 1000 simulations et la comparer graphiquement avec la distribution théorique.           "
},
{
  "id": "sec-probas-exercices",
  "level": "1",
  "url": "sec-probas-exercices.html",
  "type": "Exercices",
  "number": "2.6",
  "title": "Exercices",
  "body": " Exercices   Exercices d'approfondissement  Caractérisation de la loi géometrique décalée   On considère et deux variables aléatoires sur , à valeurs dans , indépendantes, de même loi. On pose et .    On suppose que pour tout dans , , où et .  Déterminer la loi conjointe de .  Déterminer les lois marginales de et . Vérifier que et sont indépendantes.       On a et .  Si , alors on a : et donc, par indépendance de et :     Si , alors on a : et donc, par indépendance de et :      Dans tous les cas, on trouve .     Pour , on a :   Pour , on a :    On vérifie que et sont indépendantes car :         On suppose que les variables et sont indépendantes et que pour tout . Montrer qu'il existe , tel que, pour tout ,     Comme précédemment, on a : Par indépendance de et d'une part, de et d'autre part, on en déduit : par hypothèse. On a en particulier, pour tout :  En divisant les égalités, on obtient : Ce rapport est indépendant de et strictement positif. On le note . La suite est géométrique de raison . Pour tout , on a . La série converge et a pour somme 1 donc et . En posant , on a le résultat voulu.     Une caractérisation de la loi de Poisson   On considère une variable aléatoire discrète sur l'espace probabilisé telle que et pour tout . Si la variable aléatoire prend la valeur , on procède à une succession de épreuves de Bernoulli indépendantes de paramètre . On note et les variables aléatoires représentant respectivement le nombre de succès et d'échecs dans ces épreuves.    Montrer que si suit une loi de Poisson de paramètre , les variables et suivent aussi des lois de Poisson dont on déterminera les paramètres. Montrer que les variables et sont indépendantes.    Montrer réciproquement que si et sont indépendantes, alors suit une loi de Poisson. Pour cela, on montrera :    qu'il existe deux suites et telles que :     que les suites et sont géométriques.      Variables aléatoires uniformes et Poisson   Soient un entier et une suite de variables aléatoires indépendantes et de même loi uniforme sur . Pour tout , on définit :     Quelle est la loi de pour et ?    Soit et avec . Calculer la covariance des variables aléatoires et . Sont-elles indépendantes ?    Soit et une variable aléatoire suivant une loi de Poisson de paramètre , indépendante des variables . On pose :     Déterminer, en fonction de et , la loi de pour tout .    Déterminer la loi conjointe de .      Lemme de Borel-Cantelli   Soit une suite d’événements. On pose  est l'événement « se réalise pour une infinité d'indices ».   Lemme 1 de Borel-Cantelli   Montrer que si la série converge alors .    Notons . La suite est décroissante donc . D’après le cours, on sait que et comme la série converge, Conclusion : .    Lemme 2 de Borel-Cantelli   On suppose que les événements sont indépendants, montrer que si la série diverge alors .    Montrer que pour tout , et penser au logarithme qui transforme produit en somme...    On a . Montrons que pour tout , , et on en déduit que .  Par décroissance de la famille , Or par indépendance, .  Il suffit donc de démontrer que pour conclure.  S’il existe un tel que , le résultat est immédiat.  Dans le cas contraire, pour tout , , on peut considérer le logarithme du produit et on utilise l’inégalité pour , car diverge. Ainsi, le produit tend vers 0, et donc .    Application 1   Soit une suite de variables aléatoires et une variable aléatoire discrète. Pour , on pose . Montrer que si pour tout , la série converge alors la suite converge presque sûrement vers , c’est-à-dire qu’il existe tel que et pour tout .    D’après le lemme 1 de Borel-Cantelli, avec . Posons . On sait que . Soit . On a c’est-à-dire ce qui est équivalent à Ainsi, sur de probabilité 1, on a pour tout .    Application 2   On tape aléatoirement un texte au clavier, chaque caractère étant équiprobable. Montrer que presque sûrement le texte tapé (supposé très grand) contiendra n’importe quel ouvrage littéraire connu.    Soit la variable aléatoire représentant le caractère tapé à la étape. Les variables aléatoires sont indépendantes (et de même loi).  On considère un texte d’un ouvrage littéraire connu (il y en a un nombre fini). Soit sa longueur et ce texte codé en suite de caractères.  Posons . Il est clair que les événements sont indépendants et que pour tout , où est le nombre de caractères possibles.  Comme la série (à terme général constant) diverge, le lemme 2 de Borel-Cantelli nous permet d’affirmer que Ainsi, de façon presque sûre, le texte tapé contiendra une infinité de fois le texte littéraire que nous avons choisi. Comme il existe un nombre fini de textes littéraires, de façon presque sûre, le texte tapé contient à terme tous les textes littéraires une infinité de fois. Ce « paradoxe » dit de Borel s’explique par le fait que les apparitions (en moyenne) de tels textes sont extrêmement rares et dépassent largement l’espérance de vie d’un être humain...     Lemme de Borel-Cantelli, deuxième méthode   Soit un espace probabilisé et une suite d’événements.  On suppose que la série suivante converge :      On note la fonction indicatrice d’un ensemble . Soit (avec la convention si la série diverge). Prouver que est une variable aléatoire discrète.    On montre que prend ses valeurs dans , qui est un ensemble dénombrable. Pour , on a :   Chaque ensemble à l'intérieur de cette union est un événement, donc est un événement. De même, on montre que est un événement, donc est bien une variable aléatoire discrète.      Soit appartient à un nombre fini de (pour )}. Prouver que est un événement et que .    La série converge, donc d'après le lemme de Borel-Cantelli ( ),   Cela signifie que . Donc, presque sûrement, appartient à un nombre fini d'événements , ce qui montre que est un événement et que .      Prouver que est d'espérance finie.    On définit . Alors :   Par passage à la limite, et en utilisant la convergence de la série :   Ainsi, est bien d'espérance finie.     Loi faible des grands nombres dans   Soit une suite de variables aléatoires réelles discrètes, deux à deux indépendantes, de même loi, possédant une espérance finie . On pose, pour tout , .     Dans les deux premières questions, on suppose .   Soit .  Pour , on définit par : Montrer que la variable aléatoire est d'espérance finie et que l'on peut choisir tel que .  On pose . Montrer que :   On pose, pour tout , et . Justifier que les variables admettent un moment d'ordre 2. Montrer que . En déduire que .    Montrer que, pour tout , on a :           La fonction est bornée par , donc est d'espérance finie. De plus, on a : Comme , on peut choisir suffisamment grand pour que .  On a : Comme et , on peut choisir suffisamment grand pour que .  Les variables sont centrées et admettent un moment d'ordre 2 car est bornée et a une espérance finie. On a : Par l'inégalité de Markov, on a : Comme , on obtient :     Pour tout , on a :         On ne suppose plus . Montrer que l'on a :     On pose . Alors est la moyenne des variables , qui sont centrées. D'après la question précédente, on a : Par conséquent :       Somme aléatoire de variables aléatoires (I)   Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables , pour , forment une suite de variables aléatoires indépendantes. On pose :      Montrer que est une variable aléatoire.    On a . Les étant au plus dénombrables, il en est de même de leur union dénombrable, et a fortiori est au plus dénombrable. De plus : donc , union dénombrable d'événements, est un événement et est une variable aléatoire.      Déterminer la loi de , lorsque les suivent la loi de Bernoulli de paramètre et la loi de Poisson de paramètre .    On a et d'après la formule des probabilités totales, pour tout : On remarque que : la dernière égalité résultant de l'indépendance des variables par rapport à . Pour , est une somme de variables de Bernoulli, indépendantes, de même paramètre ; elle suit donc la loi binomiale de paramètre . On a donc : On remarque que cette formule reste vérifiée si , car alors prend la valeur 0, avec la probabilité 1. On en déduit : En simplifiant, on obtient : La variable aléatoire suit donc la loi de Poisson de paramètre .      Déterminer la loi de lorsque les suivent la loi géométrique de paramètre et la loi géométrique de paramètre .    On procède comme dans la question précédente. On a et, pour tout : Comme les variables sont à valeurs dans , il est clair que si . Supposons . On peut alors écrire : où est l'ensemble des -listes d'entiers strictement positifs tels que . Le cardinal de est égal au nombre de -listes d'entiers tels que , car à , on peut associer bijectivement : On a donc . D'autre part, pour , on a, par indépendance des variables aléatoires : On obtient ainsi . On en déduit, pour : En simplifiant, on obtient : La variable suit donc la loi géométrique de paramètre .     Somme aléatoire de variables aléatoires (II)   Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables , pour , forment une suite de variables aléatoires indépendantes. On pose :      Montrer que est une variable aléatoire.    On a . Les ensembles sont au plus dénombrables, donc leur union est également au plus dénombrable. Ainsi, est au plus dénombrable. De plus, pour tout , on a : qui est une union dénombrable d'événements. Par conséquent, est une variable aléatoire.      Déterminer la loi de dans les cas suivants :  Les suivent la loi de Bernoulli de paramètre et suit la loi de Poisson de paramètre .  Les suivent la loi géométrique de paramètre et suit la loi géométrique de paramètre .        Si les suivent la loi de Bernoulli de paramètre et suit la loi de Poisson de paramètre , alors suit la loi de Poisson de paramètre . En effet, pour tout , on a : En simplifiant, on obtient :   Si les suivent la loi géométrique de paramètre et suit la loi géométrique de paramètre , alors suit la loi géométrique de paramètre . En effet, pour tout , on a : En simplifiant, on obtient :         On suppose que les variables aléatoires sont à valeurs dans .  Montrer que sur .  Montrer que, si et sont d'espérance finie, alors est d'espérance finie et vérifie la première formule de Wald :   Montrer que, si et possèdent un moment d'ordre 2, alors possède aussi un moment d'ordre 2 et vérifie la seconde formule de Wald :          Pour tout , La famille de réels positifs est donc sommable. On peut donc échanger l'ordre des sommations. Pour , on a :  car et sont indépendantes. On en déduit :  car , par indépendance des variables . On obtient finalement :    Si et sont d'espérance finie, alors :   Si et possèdent un moment d'ordre 2, alors : En utilisant la formule de dérivation composée, on obtient :         On revient au cas général. On suppose que et sont d'espérance finie.  Démontrer que la famille est sommable.  En déduire que est d'espérance finie et :         La famille est sommable car :   En sommant la famille, on obtient :        Convergence presque sûre   Soit une suite de variables aléatoires réelles et une variable aléatoire réelle définies sur . On pose : On dit que la suite converge presque sûrement vers si .     Montrer que l'on a , où :     On a : En d'autres termes, est l'ensemble des pour lesquels la suite converge vers . On peut réécrire comme : Par continuité décroissante de la probabilité, on a :       On suppose que : Montrer que la suite converge presque sûrement vers .    Par hypothèse, pour tout , on a : Cela signifie que, pour tout , l'ensemble des pour lesquels pour une infinité de est de probabilité nulle. Par conséquent, pour presque tout , la suite converge vers , c'est-à-dire que .      Montrer que si la série de terme général converge pour tout , alors la suite converge presque sûrement vers .    Si la série de terme général converge pour tout , alors, d'après le lemme de Borel-Cantelli ( ), on a : En effet, le lemme de Borel-Cantelli affirme que si , alors . Appliqué à , cela donne : Par conséquent, la suite converge presque sûrement vers .     Loi forte des grands nombres dans  Soit une suite de variables aléatoires réelles indépendantes de même loi. On suppose que (a fortiori ). On pose et Nous savons d’après le cours que pour tout , Nous nous proposons d’établir une résultat un peu plus fort.    Soit , majorer en fonction de la variance de la variable aléatoire .    Rappelons que admet une variance et du fait de l’indépendance puis de la loi commune, Utilisons l’inégalité de Bienaymé-Tchebychev, C’est cette inégalité qui permet de montrer la loi faible des grands nombres.      Montrer que la série converge.    On a , terme général en d’une série positive convergente donc la série converge.      En déduire que presque sûrement, . Indication : on pourra utiliser le lemme de Borel-Cantelli ( ).    Utilisons le lemme de Borel-Cantelli ( ), il existe un événement tel que       On suppose dans cette question que les sont positifs. Montrer que presque sûrement, .    Comme les sont positifs, pour tout , la suite est croissante. Pour un quelconque, il existe tel que et on a , d'où Or (en effet ) donc, par encadrement, pour , .      On pose et . On a et . Montrer que l’on a toujours presque sûrement, . Ce résultat est appelé loi forte des grands nombres, on peut le démontrer avec l’hypothèse mais la démonstration est plus difficile.    Posons . On a . et restent des familles de variables aléatoires indépendantes de même loi et d'espérance au carré fini, de plus . On dispose des événements et de probabilité 1 tels que Pour , donc pour , et on a bien .       Exercices d'application  Lancer de pièce jusqu'au premier pile   On lance une pièce de monnaie jusqu'à l'obtention du premier pile, la probabilité d'obtenir pile étant . Soit la variable aléatoire représentant le nombre de lancers nécessaires. Si , on relance ensuite fois la pièce et on appelle la variable aléatoire représentant le nombre de piles obtenu.    Déterminer la loi de , celle du couple , puis la loi de .    Montrer que a même loi que le produit de deux variables indépendantes et telles que suive une loi de Bernoulli et une loi géométrique de même paramètre.    En déduire l'espérance et la variance de .    Temps d'attente de succès consécutifs   On considère une suite d'épreuves de Bernoulli indépendantes. À chaque épreuve, la probabilité de succès est . On se donne un entier strictement positif. Pour , on note la probabilité qu'au cours des premières épreuves, on ait obtenu succès consécutifs (au moins une fois).        Calculer , , ..., .    Montrer que, pour , on a :     Montrer que la suite est convergente. Calculer sa limite.         On a , car il faut au moins épreuves pour obtenir succès consécutifs. Pour , la probabilité d'obtenir succès consécutifs est .    Pour , on note l'événement « la -ième épreuve est un succès » et l'événement « au cours des premiers tirages, on a obtenu succès consécutifs ». On a clairement , donc . L'événement est réalisé si on obtient succès consécutifs pour la première fois entre le -ième et le -ième tirage, ce qui impose que la -ième épreuve soit un échec et qu'on n'ait pas obtenu succès consécutifs avant. On a donc : Par indépendance des épreuves, on obtient : D'où la relation :     La suite est croissante et majorée par 1, donc elle converge. On note sa limite. Par passage à la limite dans la relation précédente, on obtient : En simplifiant, on trouve : Comme , on a , donc , c'est-à-dire . Ainsi, la suite converge vers 1.           Déduire de la question 1 que l'on peut définir une variable aléatoire égale au temps d'attente de succès consécutifs. On définira comme l'événement « on a obtenu des succès aux épreuves de rang , , ..., sans jamais avoir obtenu succès consécutifs auparavant ».    Montrer en utilisant le résultat de que :          Comme la suite est croissante, on a : On obtient de manière presque sûre une suite de succès consécutifs au bout d'un nombre fini d'épreuves. Sur un ensemble de probabilité 1, on peut définir l'application . On a, par définition , donc est un événement et une variable aléatoire à valeurs dans .    Pour tout , on a et donc . D'après la question 1, on a pour tout : D'après , on en déduit :        File d'attente avec un guichet   On considère une file d'attente avec un guichet et clients qui attendent. Chaque minute, un guichet se libère. le client suivant est alors choisi le processus aléatoire suivant :   Avec probabilité , il appelle le client en première position dans la file,  Sinon, il choisit de manière équiprobable parmi les autres clients.   Enfin, un nouveau client arrive dans la file et se place en dernière position (de telle sorte qu'il y a toujours exactement clients qui attendent). Pour tout , on note le temps d'attente du client qui occupe la position dans la file.    Quelle est la loi de ? Donner son espérance et sa variance.   À chaque instant, le client en première position peut être choisi avec une probabilité . Dans le cas contraire, il reste en première position. L'ensemble des valeurs prises par est donc et pour , on a . En effet, cela signifie que fois, a pas été choisi, avant qu'il soit choisi la -ième fois. Ainsi, suit la loi géométrique de paramètre et l'on a :      Montrer que, pour tout , la variable est d'espérance finie.   Pour un client quelconque de la file d'attente, la probabilité d'être servi à un moment donné est supérieure ou égale à , et donc la probabilité de ne pas être servi est inférieure ou égale à . On en déduit que, pour tout , on a , car il faut pour que soit réalisé que le client initialement à la -ième place n'ait pas été choisi fois. Ainsi, est majorée par une suite géométrique convergente. On en déduit que la série de terme général converge. Ainsi, est d'espérance finie.     Écrire une relation entre et pour tout . En déduire une expression de en fonction de et . On pourra considérer la suite .   Soit . On note la variable représentant le premier choix du client à servir. Après ce choix, le client qui est à la -ième place avance d'une place si , ne bouge pas si , et quitte la file si . On a donc, pour :   Sachant que : on obtient, en appliquant la formule des probabilités totales : Comme , on a : On en déduit : La suite est arithmétique de raison et de premier terme . On obtient, pour : et donc :      Comparer les caractéristiques de cette file d'attente et d'une file d'attente « classique » (premier arrivé, premier servi).   Dans une file d'attente classique, le temps d'attente du -ième client serait . On observe que, pour , on a , l'inégalité étant stricte pour . Cela montre que le temps d'attente moyen dans cette file d'attente est plus long que dans une file d'attente classique, sauf pour le dernier client.     Loi Zeta   Soit l'ensemble des nombres premiers. Pour , on note et une variable aléatoire à valeurs dans dont la loi est définie par :      Justifier qu'on définit bien ainsi la loi d'une variable aléatoire.    Les réels , pour , sont positifs et par définition, donc on définit bien la loi d'une variable aléatoire.      Pour tout , on considère . Montrer que est une famille d'événements indépendants. En déduire une preuve probabiliste de :     Pour tout , est un événement et : Soit des nombres premiers distincts. Ces nombres sont premiers entre eux donc, d'après le théorème de Gauss : On en déduit : Les événements de la famille sont donc indépendants. On en déduit que est aussi une famille d'événements indépendants. Notons la suite des entiers premiers rangés par ordre croissant. On a : Par indépendance des événements, on a : Par continuité décroissante, on a : Mais , car 1 est le seul entier qui n'ait pas de diviseur premier. Comme , on en déduit :       Montrer que la probabilité qu'aucun carré différent de 1 ne divise vaut .    Notons l'événement « aucun carré différent de 1 ne divise ». L'événement est réalisé si, et seulement si, le carré d'aucun nombre premier ne divise . On a donc et toujours par indépendance des événements : On a : Ainsi :     Densité naturelle d'une partie de    Soit une partie de telle que la suite converge. On note sa limite et on l'appelle densité naturelle de .  Montrer que .    Traitons d'abords le cas où est infini. Soit , posons pour tout , . On a par hypothèse : donc il existe tel que :   On écrit alors :   On s'intéresse au terme . On a :   Puisque est infini, soit la suite strictement croissante de ses éléments. Il s'ensuit alors que pour , . Posons alors :   On a donc : car et donc . D'où :   On fait alors de même à gauche et on trouve pour assez proche de 1 que : ainsi :   Si maintenant est fini et est un entier majorant de alors d'un côte et donc et par suite . De l'autre et donc .      Le but de cet exercice est de montrer qu'il n'existe pas de probabilité sur telle que pour tout , . On note la suite croissante des nombres premiers. On raisonne par l'absurde en supposant que cette probabilité existe.    Montrer que les événements pour sont indépendants.    Soit une partie finie de . On a Ainsi, les événements sont indépendants.      Que penser de la nature de la série ?    On sait que la série diverge (voir exercice 1.17 p. 39). Puisque , la série diverge également.      Conclure.    On applique le lemme de Borel-Cantelli puisque les événements sont indépendants, Ainsi, pour presque tout entier , il existe une infinité de nombres premiers le divisant... ce qui est évidemment absurde. Par conséquent, une telle probabilité ne peut pas exister.     Théorème de Weierstrass   Soit une fonction continue de dans . Soit . On considère une suite de variables de Bernoulli de paramètre , indépendantes, sur le même espace probabilisé. Pour , on pose .     Montrer que :     Montrer que :      En déduire que la suite de fonctions polynomiales définie par converge uniformément vers sur .     Une série à termes aléatoires  Soit une suite de variables aléatoires indépendantes de même loi géométrique de paramètre avec , On se propose d’étudier la convergence de la série Posons    Déterminer pour .  Puisque , la convergence de la série de Riemann     On suppose dans cette question que .  Montrer que pour , .  En utilisant le lemme de Borel-Cantelli ( ), montrer que   En déduire la nature presque sûre de la série       Pour , on a    Soit . Remarquons que donc la série de terme général avec converge et on conclut par le lemme de Borel-Cantelli ( ).  Considérons . On a et pour , il existe tel que pour tout , Puisque , . La série diverge presque sûrement.      Traiter le cas en étudiant la probabilité pour un bien choisi.   On procède de même pour ,  On choisit tel que , ainsi la série converge. On peut appliquer le lemme de Borel-Cantelli ( ), il vient que a pour probabilité 1 et que pour , il existe tel que pour tout , donc la série diverge (par comparaison avec une intégrale, on sait que l’intégrale de Bertrand diverge). La série diverge presque sûrement.       Exerices thématiques  Taux de panne   Soit une variable aléatoire discrète à valeurs dans vérifiant :  représente le moment où un mécanisme tombe en panne. C'est à dire le numéro de l'instance de son cycle de fonctionnement où il tombe en panne. En principe, sous l'effet de l'usure, plus la durée de son fonctionnement est grande plus la probabilité que le mécanisme tombe en panne augmente.  que On appelle taux de panne associé à la suite réelle définie par :  est la probabilité pour que le mécanisme tombe en panne à l'instant sachant qu'il a fonctionné jusqu'à cet instant.     Exprimer en fonction des .    Éviter de diviser par . Exprimer comme un produit de facteurs .         On a donc . Ce qui donne On en déduit que Ce qui donne par télescopage La relation signifie que donc finalement     Caractérisation du taux de panne      Montrer que pour tout et que la série de terme général diverge.    Réciproquement, soit une suite à valeur dans telle que la série de terme général diverge. Montrer qu'il existe une variable aléatoire dont le taux de panne est la suite .       On rappelle que pour une suite de réels positifs sommable et de somme , il existe une variable aléatoire telle que pour tout .      Soit et supposons que . Alors , ou encore . Ce qui implique que contredisant l'hypothèse faite dans l'énoncé. Alors .  Ensuite est le reste de la série convergente donc il converge vers . Ce qui implique que La série est nécessairement divergente car dans le cas contraire convergerait vers et on aurait donc ce qui impliquerait que la série est convergente.    Soit une série divergente à termes dans et posons pour tout  Avec ces relations on a On peut ensuite écrire Puisque la série de réels positif est divergente positive sa suite des sommes partielles tend vers et on a donc . Par suite . Puisque alors la série est convergente de somme .  Il existe donc une VADR  tel que pour tout .        Montrer que la variable suit une loi géométrique si, et seulement si, son taux de panne est constant.    On suppose que suit une loi géométrique de paramètre . Alors pour tout on a . Donc Par suite . Donc le taux de panne est constant. Réciproquement, on suppose que le taux de panne est constant de valeur . Alors pour tout on a . Donc suit une loi géométrique de paramètre .  Noter que cela signifie que le taux de panne est constant si et seulement si les événements «le mécanisme tombe en panne à l'instant » sont mutuellement indépendants et ont tous la même probabilité. Il n'y a aucun effet d'usure.     Maximums et minimums provisoires   Soit . On désigne par l'ensemble des permutations de . On munit de la probabilité uniforme. Pour et , on dit que est un maximum provisoire (resp. minimum provisoire ) de si : On désigne par (resp. ) les variables aléatoires représentant le nombre de maximums (resp. minimums) provisoires des permutations de .     Montrer que les variables et ont même loi.    On observe qu'en , il y a toujours un maximum et un minimum provisoire, et donc que et sont à valeurs dans . L'application qui à la permutation associe la permutation est clairement bijective. Pour , est un maximum provisoire de si, et seulement si, est un minimum provisoire de . En effet : ce qui équivaut à : On en déduit que, pour tout , Comme est bijective, on a , et donc , car est muni de la probabilité uniforme.      Déterminer la loi de , son espérance et sa variance.      La permutation est dans si, et seulement si, . On en déduit .  On a . On en déduit .  Enfin, .  On obtient :       Déterminer la loi du couple et sa covariance.    Pour , on a si . En effet, sauf pour , ne peut pas être à la fois un maximum provisoire et un minimum provisoire. On obtient : On trouve :      Modèle de Galton-Watson   On observe des virus qui se reproduisent tous selon la même loi avant de mourir : un virus donne naissance en une journée à virus, où est une variable aléatoire à valeurs dans . Pour tout , on note . On suppose et . On note la fonction génératrice de .  On part au jour zéro de virus. Au premier jour, on a donc virus, où suit la loi de ; chacun de ces virus évolue alors indépendamment des autres virus et se reproduit selon la même loi avant de mourir : cela conduit à avoir virus au deuxième jour ; et le processus continue de la sorte. On note .     Calculer et .    Par définition, . Comme , on a : Pour , on a . Comme suit la loi de , on a :       Montrer que la suite est convergente.    La suite est croissante car si , alors . Ainsi, . De plus, la suite est majorée par 1, car . Par le théorème de la convergence monotone, la suite est convergente.      Montrer que pour tout entier , on a .    On écrit, avec la formule des probabilités totales : Si , alors est la somme de variables indépendantes de même loi que . Ainsi : On obtient donc : où est la fonction génératrice de .      Que peut-on dire de la limite de ? Discuter selon la valeur de . Interpréter le résultat.    La limite de la suite vérifie , car et est continue. On a donc : La fonction est convexe et croissante sur , avec et . On distingue deux cas :  Si , alors a une unique solution . Ainsi, la probabilité que la population s'éteigne est 1.  Si , alors a deux solutions : et une autre solution . La probabilité que la population s'éteigne est .  Interprétation : Si l'espérance de reproduction est faible ( ), la population s'éteint presque sûrement. Si elle est forte ( ), il y a une probabilité non nulle que la population survive indéfiniment.     Variables aléatoires symétriques et inégalité de Paul Lévy   Toutes les variables considérées dans cet exercice sont à valeurs dans . Une variable aléatoire à valeurs dans est dite symétrique si :       Montrer que si est symétrique, alors est une médiane de , c'est-à-dire :   Montrer que si et sont deux variables aléatoires indépendantes de même loi, alors est symétrique.  Montrer que si et sont deux variables aléatoires symétriques indépendantes, alors est symétrique.      On a : Comme , on en déduit : De même, on a : Ainsi, est une médiane de .  Soit et deux variables aléatoires indépendantes de même loi. Pour tout , on a : En utilisant le fait que et ont même loi, on obtient : Ainsi, est symétrique.  Soit et deux variables aléatoires symétriques indépendantes. Pour tout , on a : En utilisant la symétrie de et , on obtient : Ainsi, est symétrique.      On considère des variables aléatoires symétriques , indépendantes. On se donne . Pour , on pose et, de plus, on note l'événement : et .  Montrer que est symétrique.  Montrer que, pour , on a : et   Prouver que .  En déduire l'inégalité de Paul Lévy :       Par récurrence sur , en utilisant le résultat de la question 1.(c), on montre que est symétrique.    On a , d'où l'inclusion.  Les événements et sont indépendants car est une fonction de , tandis que est une fonction de . Ainsi : Comme est symétrique, on a , d'où le résultat.    L'événement est réalisé si, et seulement s'il existe un indice tel que et pour tout . Cela correspond exactement à la définition de .  En utilisant les résultats précédents, on a :       Marche aléatoire dans : premier retour à l'origine   Soit une suite de variables aléatoires, sur le même espace probabilisé , indépendantes et de même loi définie par : où . On pose et, pour tout , . La suite est appelée marche aléatoire dans .    Déterminer pour tout .    On note la somme de la série entière . Montrer que :     Pour tout entier naturel non nul , on note l'événement « le mobile retourne pour la première fois à l'origine au bout de déplacements », c'est-à-dire : On pose pour tout et .    Montrer que, pour tout entier naturel non nul, on a :     En déduire que, pour tout entier naturel non nul , on a :       Inégalité de Kolmogorov   Soit des variables aléatoires réelles discrètes de l'espace probabilisé , indépendantes, ayant un moment d'ordre 2, centrées, ainsi que . On pose, pour tout :      Montrer que, pour , les variables et sont indépendantes. En déduire que :     Si , on a et cette variable aléatoire est indépendante de toute autre variable aléatoire. Supposons donc . On a : donc est une fonction des variables aléatoires . D'autre part, on a , donc est une fonction des variables aléatoires . Les variables aléatoires étant indépendantes, il en est de même de et .  Les variables aléatoires sont dans , donc il en est de même des variables aléatoires . Les variables aléatoires , et ont une espérance finie, car elles sont positives et inférieures respectivement à , et , qui ont une espérance finie. On a, par linéarité de l'espérance : Les variables aléatoires et sont indépendantes, donc : car . On a donc l'égalité voulue.  Soit :  Si , alors .  Si , alors .  On a donc , d'où l'on déduit : Comme , on a a fortiori :       On pose . Montrer que .    Soit . Alors si, et seulement s'il existe tel que . Alors est le plus petit tel entier si, et seulement si, . On en déduit que . Les événements sont incompatibles, donc :       En déduire l'inégalité de Kolmogorov :     De la question 1, on déduit : Mais , donc : car . On obtient :      Inégalité de Le Cam   L'objet de cet exercice est d'étudier l'approximation de la loi binomiale par la loi de Poisson. Toutes les variables aléatoires considérées sont définies sur le même espace probabilisé et sont à valeurs dans .     Soit et deux variables aléatoires. Pour tout , on pose et . On définit la distance entre et par :     Montrer que pour toute partie de , on a :     Démontrer la formule :     En déduire que :         Pour toute partie de , on a :     On a : Donc :     L'événement contraire de est . On a donc : Ainsi :         Soit des variables aléatoires mutuellement indépendantes. On suppose que, pour , suit la loi de Bernoulli de paramètre et suit la loi de Poisson de paramètre . On pose . Enfin, pour , on considère la variable de Bernoulli telle que si et sinon.    Déterminer pour tout , la loi de . En déduire la loi de . Quelle est la loi de ?    Montrer que pour tout :     En déduire l'inégalité de Le Cam :         Pour tout , la variable est à valeur dans . On a : Donc suit la loi de Bernoulli de paramètre . La variable suit donc la loi binomiale de paramètre . La variable , somme de variables de Poisson indépendantes de paramètre , suit la loi de Poisson de paramètre .    On a : Or, pour tout , , donc :     On a montré que . Or : Donc :        Fonction génératrice des moments   Soit une variable aléatoire discrète, pas presque sûrement constante, sur l'espace probabilisé . On pose, pour ,  est appelée la fonction génératrice des moments de la variable aléatoire . On suppose qu'il existe un intervalle contenant tel que pour tout .       Soit deux réels tels que . On considère tel que . Soit . Montrer qu'il existe tel que : En déduire que est d'espérance finie pour tout .  Montrer que est de classe sur et vérifie : En déduire, pour tout , une expression du moment d'ordre de . On note l'espérance de .      Pour et , on a : où est une constante positive. Comme et ont une espérance finie, il en est de même pour .  La fonction est dérivable sur et sa dérivée est donnée par : Par récurrence, on montre que est de classe et que : En particulier, pour , on a :          On pose, pour tout , . Montrer que est strictement convexe.  On note et on pose , pour tout . Montrer que . Calculer ; montrer que si .  Montrer que :   En déduire les inégalités de Chernov :        La fonction est strictement convexe car sa dérivée seconde est strictement positive :   On a , donc . De plus, car . Si , alors par convexité de .  La fonction atteint son maximum en un point tel que . Si , alors ; si , alors .  En utilisant l'inégalité de Markov, on a : De même, pour , on a :       Chaînes de Markov   Soit et une suite de variables aléatoires sur un espace probabilisé , à valeurs dans . On dit que est une chaîne de Markov homogène s'il existe une matrice telle que, pour tout entier et tous éléments de , on ait : La matrice est appelée matrice de transition de la chaîne. Dans la suite, on considère une telle chaîne de Markov.     Montrer que est une matrice à coefficients positifs dont la somme des coefficients de chaque ligne est égale à 1 (on dit que est une matrice stochastique). Montrer que 1 est valeur propre de .    Les coefficients de sont positifs car ce sont des probabilités. Pour tout , on a : Ainsi, est une matrice stochastique. Soit le vecteur colonne à lignes, dont tous les coefficients sont égaux à 1. On a , donc 1 est valeur propre de .         Soit tel que . Montrer que, pour et dans , on a : En déduire que : où est le coefficient d'indice de la matrice .    Montrer que, pour et dans , tels que , on a :          On démontre la propriété par récurrence sur . Pour , on a : Supposons la propriété vraie au rang ( ) et montrons-la au rang . Si , on peut écrire : Par hypothèse de récurrence, on a : De plus, par définition de la chaîne de Markov, on a : On en déduit : Pour obtenir la loi conditionnelle de sachant , il faut sommer l'égalité précédente par rapport à . On obtient : où est le coefficient d'indice de la matrice .    L'événement qui contient est a fortiori de probabilité non nulle. On a donc : En utilisant la propriété de Markov, on obtient : Par ailleurs, on a : On en déduit que :         On suppose désormais que tous les coefficients de sont strictement positifs. On pose . On fixe un élément , et l'on considère les suites :    Montrer que pour tout entier naturel :     Montrer que les suites et convergent vers la même limite.    En déduire qu'il existe une probabilité sur , c'est-à-dire une famille d'entiers positifs, de somme 1, telle que : Montrer que est la seule probabilité invariante par , c'est-à-dire vérifiant .         Pour tout entier naturel , on a : Comme pour tout , on a : De même, on a :     Les suites et sont adjacentes. En effet, on a : Comme , la suite converge vers 0. Ainsi, les suites et convergent vers la même limite.    On note la limite commune de et . Pour tout , on a : Ainsi, la probabilité est invariante par , c'est-à-dire . De plus, est la seule probabilité invariante par , car si est une autre probabilité invariante, on a pour tout , et donc par passage à la limite.         Exercices de recherche  Sur l'espérance d'un produit   Soit et deux variables aléatoires réelles d'espérance finie sur le même espace probabilisé. On considère les trois propriétés suivantes :   et sont presque sûrement constantes ;  et sont indépendantes ;  est d'espérance finie et .      Montrer que (i) (ii) et que (ii) (iii), mais qu'aucune réciproque n'est vraie.       (i) (ii) : Si est presque sûrement constante, alors l'événement est de probabilité 0 ou 1, pour tout réel , donc est indépendant de l'événement , pour tout réel. Les variables et sont donc indépendantes. On remarque qu'il suffit qu'une des deux variables aléatoires soit presque sûrement constante pour que (ii) soit vérifiée. La réciproque est fausse. Si est un couple de variables aléatoires suivant la loi uniforme sur , les variables et suivent une loi de Bernoulli de paramètre et sont indépendantes, sans être presque sûrement constantes.   (ii) (iii) : L'implication (ii) (iii) est un théorème du cours. La réciproque est fausse. Si est une variable réelle suivant la loi uniforme sur et , on a et , donc . Mais et ne sont pas indépendantes, car :        Montrer que (iii) (i) est vrai s'il existe et strictement croissantes ainsi qu'une variable aléatoire réelle telle que et . On admettra qu'aucune généralité n'est perdue à supposer qu'il existe une seconde variable aléatoire indépendante de et suivant la même loi que . On introduira la fonction : et on s'intéressera à la variable .   On suppose que (iii) est vérifiée et qu'il existe et strictement croissantes ainsi qu'une variable aléatoire réelle telle que et . Comme et sont croissantes, et ont le signe de , donc , pour tout . On en déduit que la variable est à valeurs positives. On écrit : La variable aléatoire est d'espérance finie. La variable aléatoire a même loi que et donc même espérance. On a et a même loi que . Les variables et sont indépendantes car et le sont, et d'espérance finie. On en déduit que est d'espérance finie et : On démontre de même que . Ainsi, est une somme de variables aléatoires d'espérance finie. Elle est donc d'espérance finie et, par linéarité de l'espérance : Comme est une variable aléatoire positive, on en déduit qu'elle est presque sûrement nulle. Il existe un événement de probabilité égale à 1 tel que l'on ait , pour tout . Si , on a ou , et comme et sont strictement croissantes, on a . Si et sont deux réels distincts, l'événement est inclus dans et donc dans . Il est donc de probabilité nulle. Les variables aléatoires et sont indépendantes et a même loi que donc : Soit tel que (un tel existe car ). On a alors pour tout et donc . La variable est donc presque sûrement constante. On en déduit qu'il en est de même des variables aléatoires et .     Espérance conditionnelle   Soit et deux variables aléatoires sur le même espace probabilisé, à valeurs dans , telles que .    Montrer qu'il existe une variable aléatoire d'espérance finie, qui s'écrit , où est une fonction de dans , et telle que, pour toute application bornée de dans , on ait :    Si est bornée, il en est de même de la variable aléatoire . En notant un majorant de , on a , et comme est d'espérance finie, il en est de même de . Le théorème de transfert appliqué à la variable à valeurs dans et à la fonction donne : La famille est sommable, donc on a : Si , alors on peut écrire : et on a alors : La dernière somme est l'espérance de pour la probabilité conditionnelle , que l'on note . Par ailleurs, si , car pour tout . En posant : on obtient : D'après le théorème de transfert, on a : Cela est valable pour toute fonction bornée . En prenant pour la fonction constante égale à 1, on obtient que possède une espérance égale à . La variable aléatoire a les propriétés voulues.     Montrer que si une autre variable aléatoire a les mêmes propriétés que , elle est égale à presque sûrement.   Soit une autre variable aléatoire ayant les propriétés requises. Considérons tel que . En prenant , on obtient et l'égalité : Le théorème de transfert donne : On a donc : Par ailleurs, on a : On obtient donc : Posons et . Alors est un événement négligeable, car réunion au plus dénombrable d'ensembles négligeables. Les variables aléatoires et coïncident sur le complémentaire de , donc sont presque sûrement égales.     La variable aléatoire étant définie et unique, on la note : c'est l'espérance conditionnelle de par rapport à . Soit une application bornée de vers . Montrer que :    Par définition de l'espérance conditionnelle, il existe une fonction définie sur telle que : D'après les deux premières questions, on a pour tout tel que . Le théorème de transfert, appliqué à et à la fonction , donne : On a donc : On a donc sur le complémentaire de .     Théorème de Perron-Frobenius  Soit une matrice stochastique ( ).   1) On suppose dans cette question que pour c’est-à-dire qu’on passe de l’état à n’importe quel état avec une probabilité non nulle. On note .  Montrer que .  Pour un vecteur colonne. On note , et . On suppose que le vecteur est à coordonnées , montrer que   En déduire que . Montrer que la suite converge vers un vecteur de la forme   Théorème de Perron-Frobenius. Montrer que Que peut-on dire de la matrice ? De ses éléments propres ?  Soit . Montrer que et qu’il n’existe qu’un seul vecteur ligne tel que à un scalaire multiplicatif près. Donner une interprétation probabiliste. Décrire .      On sait que la somme des coefficients sur chaque ligne de la matrice vaut 1 donc en raisonnant sur une ligne où figure le minimum , on a , donc puisque .  Soit . Le coefficient est une moyenne pondérée des coefficients donc d'où Mais on peut faire mieux. À chaque ligne , où avec . Puisque , la moyenne pondérée est plus grande que , ainsi De même, en raisonnant sur le coefficient associé à avec , Pour tout , . Conclusion : .  Par récurrence immédiate, ; comme , Ainsi, toutes les suites coordonnées de convergent vers une même limite . Donc .  On considère les vecteurs colonnes de la base canonique . On a La matrice est de rang 1, on peut l'écrire sous la forme avec . On a (car , ou encore ). C'est la matrice d'un projecteur sur la droite . Elle admet pour valeurs propres 1 (de multiplicité 1) et 0 (de multiplicité ).  Par passage à la limite dans , on a , donc en regardant par exemple la première ligne, . Supposons que alors pour tout , donc par passage à la limite . En particulier (ce qui se voit aussi immédiatement). Ainsi, en supposant , et sont deux vecteurs (colonnes) propres de de valeur propre 1. Or cette valeur propre est simple (comme pour ) donc il existe tel que (et cela reste vrai si ). Ainsi, il n’existe qu’une seule loi de probabilité pour qui stabilise les lois des variables aléatoires . De plus, remarquons que si est un vecteur ligne de somme 1, c’est-à-dire une loi de probabilité sur , alors . La loi de pour très grand « tend vers » . Enfin, (la matrice étant stochastique).      2) On reprend la notation . On suppose dans cette question qu’il existe un tel que pour c’est-à-dire qu’on passe de l’état à n’importe quel état en étapes ( indépendant de et ) avec une probabilité non nulle.  Soit à coordonnées , montrer que est décroissante.  Montrer que et que l'on a les mêmes résultats qu'aux questions 1)d) et 1)e).      Cela a déjà été vu à la question 1)b), l’hypothèse n’étant pas utilisée.  La matrice stochastique vérifie les hypothèses de la première question donc . Or est une suite extraite de la suite décroissante donc cette dernière converge également vers 0. On peut alors reprendre les raisonnements de la question précédente.      3) On suppose dans cette question pour tout , il existe tel que c’est-à-dire qu’on passe de l’état à n’importe quel état en étapes ( dépendant de et ) avec une probabilité non nulle. On suppose de plus que pour tout , . (si on représente la matrice avec un graphe probabiliste, chaque état possède une boucle de probabilité )  Soit et tel que . Montrer que pour tout , .  Montrer qu'il existe tel que pour tout , .      On peut rédiger un raisonnement par récurrence. En termes probabilistes, cela se comprend bien : si l’on peut avec une probabilité non nulle passer de l’état à l’état en étapes, on le peut également en étapes quitte (par exemple) à stationner fois en à la fin.  Notons pour tout , un entier tel que . Posons , il est clair que pour tout , .      4) On reprend les hypothèses de la question 3) précédente sauf , .  On pose . Montrer que est une matrice stochastique vérifiant les hypothèses de la question 3).  Montrer que existe et que l'on a les mêmes résultats qu'aux questions 1)d) et 1de la matric e) pour la matrice .  On note une ligne de la matrice . Montrer que et qu’il n’existe qu’un seul vecteur ligne tel que à un scalaire multiplicatif près.  Montrer que la matrice est inversible. Indication : calculer .  Montrer que .  Simplifier .  En déduire que .  Étudier les cas particuliers suivants :  Graphes           C’est immédiat, plus généralement il est facile de voir que l’ensemble des matrices stochastiques forme un convexe de .  On applique les résultats de la question 3) à la matrice .  On a le résultat pour la matrice . Or .  Soit un vecteur colonne tel que . Montrons que . On a donc . Cela entraîne vu la forme de que . On en déduit que donc, d’après la question 1)e), il existe tel que . Mais donc .  On sait que car . Or donc par combinaison.  On en déduit que pour donc    Il vient Comme est bornée ( est stochastique), . Ainsi Mais donc on a bien .    Ces exemples sont triviaux mais permettent de bien comprendre que l’on ne peut espérer avoir toujours convergence de la suite . Le premier graphe correspond à la matrice stochastique C’est une matrice circulante, on voit bien que la suite n’a pas de limite (on voit d’ailleurs que l’on ne peut trouver un commun à tous les couples ), en revanche tend vers les trois états sont autant occupés en moyenne.  Le deuxième graphe correspond à la matrice On a La suite n’a pas de limite, en revanche tend vers dont une ligne représente l’occupation moyenne de chaque état.         "
},
{
  "id": "sec-exos-approfondissement-2",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-2",
  "type": "Exercice",
  "number": "2.6.1",
  "title": "Caractérisation de la loi géometrique décalée.",
  "body": "Caractérisation de la loi géometrique décalée   On considère et deux variables aléatoires sur , à valeurs dans , indépendantes, de même loi. On pose et .    On suppose que pour tout dans , , où et .  Déterminer la loi conjointe de .  Déterminer les lois marginales de et . Vérifier que et sont indépendantes.       On a et .  Si , alors on a : et donc, par indépendance de et :     Si , alors on a : et donc, par indépendance de et :      Dans tous les cas, on trouve .     Pour , on a :   Pour , on a :    On vérifie que et sont indépendantes car :         On suppose que les variables et sont indépendantes et que pour tout . Montrer qu'il existe , tel que, pour tout ,     Comme précédemment, on a : Par indépendance de et d'une part, de et d'autre part, on en déduit : par hypothèse. On a en particulier, pour tout :  En divisant les égalités, on obtient : Ce rapport est indépendant de et strictement positif. On le note . La suite est géométrique de raison . Pour tout , on a . La série converge et a pour somme 1 donc et . En posant , on a le résultat voulu.    "
},
{
  "id": "sec-exos-approfondissement-3",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-3",
  "type": "Exercice",
  "number": "2.6.2",
  "title": "Une caractérisation de la loi de Poisson.",
  "body": "Une caractérisation de la loi de Poisson   On considère une variable aléatoire discrète sur l'espace probabilisé telle que et pour tout . Si la variable aléatoire prend la valeur , on procède à une succession de épreuves de Bernoulli indépendantes de paramètre . On note et les variables aléatoires représentant respectivement le nombre de succès et d'échecs dans ces épreuves.    Montrer que si suit une loi de Poisson de paramètre , les variables et suivent aussi des lois de Poisson dont on déterminera les paramètres. Montrer que les variables et sont indépendantes.    Montrer réciproquement que si et sont indépendantes, alors suit une loi de Poisson. Pour cela, on montrera :    qu'il existe deux suites et telles que :     que les suites et sont géométriques.     "
},
{
  "id": "sec-exos-approfondissement-4",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-4",
  "type": "Exercice",
  "number": "2.6.3",
  "title": "Variables aléatoires uniformes et Poisson.",
  "body": "Variables aléatoires uniformes et Poisson   Soient un entier et une suite de variables aléatoires indépendantes et de même loi uniforme sur . Pour tout , on définit :     Quelle est la loi de pour et ?    Soit et avec . Calculer la covariance des variables aléatoires et . Sont-elles indépendantes ?    Soit et une variable aléatoire suivant une loi de Poisson de paramètre , indépendante des variables . On pose :     Déterminer, en fonction de et , la loi de pour tout .    Déterminer la loi conjointe de .     "
},
{
  "id": "borel-cantelli",
  "level": "2",
  "url": "sec-probas-exercices.html#borel-cantelli",
  "type": "Exercice",
  "number": "2.6.4",
  "title": "Lemme de Borel-Cantelli.",
  "body": "Lemme de Borel-Cantelli   Soit une suite d’événements. On pose  est l'événement « se réalise pour une infinité d'indices ».   Lemme 1 de Borel-Cantelli   Montrer que si la série converge alors .    Notons . La suite est décroissante donc . D’après le cours, on sait que et comme la série converge, Conclusion : .    Lemme 2 de Borel-Cantelli   On suppose que les événements sont indépendants, montrer que si la série diverge alors .    Montrer que pour tout , et penser au logarithme qui transforme produit en somme...    On a . Montrons que pour tout , , et on en déduit que .  Par décroissance de la famille , Or par indépendance, .  Il suffit donc de démontrer que pour conclure.  S’il existe un tel que , le résultat est immédiat.  Dans le cas contraire, pour tout , , on peut considérer le logarithme du produit et on utilise l’inégalité pour , car diverge. Ainsi, le produit tend vers 0, et donc .    Application 1   Soit une suite de variables aléatoires et une variable aléatoire discrète. Pour , on pose . Montrer que si pour tout , la série converge alors la suite converge presque sûrement vers , c’est-à-dire qu’il existe tel que et pour tout .    D’après le lemme 1 de Borel-Cantelli, avec . Posons . On sait que . Soit . On a c’est-à-dire ce qui est équivalent à Ainsi, sur de probabilité 1, on a pour tout .    Application 2   On tape aléatoirement un texte au clavier, chaque caractère étant équiprobable. Montrer que presque sûrement le texte tapé (supposé très grand) contiendra n’importe quel ouvrage littéraire connu.    Soit la variable aléatoire représentant le caractère tapé à la étape. Les variables aléatoires sont indépendantes (et de même loi).  On considère un texte d’un ouvrage littéraire connu (il y en a un nombre fini). Soit sa longueur et ce texte codé en suite de caractères.  Posons . Il est clair que les événements sont indépendants et que pour tout , où est le nombre de caractères possibles.  Comme la série (à terme général constant) diverge, le lemme 2 de Borel-Cantelli nous permet d’affirmer que Ainsi, de façon presque sûre, le texte tapé contiendra une infinité de fois le texte littéraire que nous avons choisi. Comme il existe un nombre fini de textes littéraires, de façon presque sûre, le texte tapé contient à terme tous les textes littéraires une infinité de fois. Ce « paradoxe » dit de Borel s’explique par le fait que les apparitions (en moyenne) de tels textes sont extrêmement rares et dépassent largement l’espérance de vie d’un être humain...    "
},
{
  "id": "borel-cantelli-2",
  "level": "2",
  "url": "sec-probas-exercices.html#borel-cantelli-2",
  "type": "Exercice",
  "number": "2.6.5",
  "title": "Lemme de Borel-Cantelli, deuxième méthode.",
  "body": "Lemme de Borel-Cantelli, deuxième méthode   Soit un espace probabilisé et une suite d’événements.  On suppose que la série suivante converge :      On note la fonction indicatrice d’un ensemble . Soit (avec la convention si la série diverge). Prouver que est une variable aléatoire discrète.    On montre que prend ses valeurs dans , qui est un ensemble dénombrable. Pour , on a :   Chaque ensemble à l'intérieur de cette union est un événement, donc est un événement. De même, on montre que est un événement, donc est bien une variable aléatoire discrète.      Soit appartient à un nombre fini de (pour )}. Prouver que est un événement et que .    La série converge, donc d'après le lemme de Borel-Cantelli ( ),   Cela signifie que . Donc, presque sûrement, appartient à un nombre fini d'événements , ce qui montre que est un événement et que .      Prouver que est d'espérance finie.    On définit . Alors :   Par passage à la limite, et en utilisant la convergence de la série :   Ainsi, est bien d'espérance finie.    "
},
{
  "id": "sec-exos-approfondissement-7",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-7",
  "type": "Exercice",
  "number": "2.6.6",
  "title": "Loi faible des grands nombres dans <span class=\"process-math\">\\(L^1\\)<\/span>.",
  "body": "Loi faible des grands nombres dans   Soit une suite de variables aléatoires réelles discrètes, deux à deux indépendantes, de même loi, possédant une espérance finie . On pose, pour tout , .     Dans les deux premières questions, on suppose .   Soit .  Pour , on définit par : Montrer que la variable aléatoire est d'espérance finie et que l'on peut choisir tel que .  On pose . Montrer que :   On pose, pour tout , et . Justifier que les variables admettent un moment d'ordre 2. Montrer que . En déduire que .    Montrer que, pour tout , on a :           La fonction est bornée par , donc est d'espérance finie. De plus, on a : Comme , on peut choisir suffisamment grand pour que .  On a : Comme et , on peut choisir suffisamment grand pour que .  Les variables sont centrées et admettent un moment d'ordre 2 car est bornée et a une espérance finie. On a : Par l'inégalité de Markov, on a : Comme , on obtient :     Pour tout , on a :         On ne suppose plus . Montrer que l'on a :     On pose . Alors est la moyenne des variables , qui sont centrées. D'après la question précédente, on a : Par conséquent :     "
},
{
  "id": "sec-exos-approfondissement-8",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-8",
  "type": "Exercice",
  "number": "2.6.7",
  "title": "Somme aléatoire de variables aléatoires (I).",
  "body": " Somme aléatoire de variables aléatoires (I)   Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables , pour , forment une suite de variables aléatoires indépendantes. On pose :      Montrer que est une variable aléatoire.    On a . Les étant au plus dénombrables, il en est de même de leur union dénombrable, et a fortiori est au plus dénombrable. De plus : donc , union dénombrable d'événements, est un événement et est une variable aléatoire.      Déterminer la loi de , lorsque les suivent la loi de Bernoulli de paramètre et la loi de Poisson de paramètre .    On a et d'après la formule des probabilités totales, pour tout : On remarque que : la dernière égalité résultant de l'indépendance des variables par rapport à . Pour , est une somme de variables de Bernoulli, indépendantes, de même paramètre ; elle suit donc la loi binomiale de paramètre . On a donc : On remarque que cette formule reste vérifiée si , car alors prend la valeur 0, avec la probabilité 1. On en déduit : En simplifiant, on obtient : La variable aléatoire suit donc la loi de Poisson de paramètre .      Déterminer la loi de lorsque les suivent la loi géométrique de paramètre et la loi géométrique de paramètre .    On procède comme dans la question précédente. On a et, pour tout : Comme les variables sont à valeurs dans , il est clair que si . Supposons . On peut alors écrire : où est l'ensemble des -listes d'entiers strictement positifs tels que . Le cardinal de est égal au nombre de -listes d'entiers tels que , car à , on peut associer bijectivement : On a donc . D'autre part, pour , on a, par indépendance des variables aléatoires : On obtient ainsi . On en déduit, pour : En simplifiant, on obtient : La variable suit donc la loi géométrique de paramètre .    "
},
{
  "id": "sec-exos-approfondissement-9",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-9",
  "type": "Exercice",
  "number": "2.6.8",
  "title": "Somme aléatoire de variables aléatoires (II).",
  "body": "Somme aléatoire de variables aléatoires (II)   Soit une suite de variables aléatoires réelles discrètes, toutes de même loi, et une variable aléatoire à valeurs dans . On suppose que et les variables , pour , forment une suite de variables aléatoires indépendantes. On pose :      Montrer que est une variable aléatoire.    On a . Les ensembles sont au plus dénombrables, donc leur union est également au plus dénombrable. Ainsi, est au plus dénombrable. De plus, pour tout , on a : qui est une union dénombrable d'événements. Par conséquent, est une variable aléatoire.      Déterminer la loi de dans les cas suivants :  Les suivent la loi de Bernoulli de paramètre et suit la loi de Poisson de paramètre .  Les suivent la loi géométrique de paramètre et suit la loi géométrique de paramètre .        Si les suivent la loi de Bernoulli de paramètre et suit la loi de Poisson de paramètre , alors suit la loi de Poisson de paramètre . En effet, pour tout , on a : En simplifiant, on obtient :   Si les suivent la loi géométrique de paramètre et suit la loi géométrique de paramètre , alors suit la loi géométrique de paramètre . En effet, pour tout , on a : En simplifiant, on obtient :         On suppose que les variables aléatoires sont à valeurs dans .  Montrer que sur .  Montrer que, si et sont d'espérance finie, alors est d'espérance finie et vérifie la première formule de Wald :   Montrer que, si et possèdent un moment d'ordre 2, alors possède aussi un moment d'ordre 2 et vérifie la seconde formule de Wald :          Pour tout , La famille de réels positifs est donc sommable. On peut donc échanger l'ordre des sommations. Pour , on a :  car et sont indépendantes. On en déduit :  car , par indépendance des variables . On obtient finalement :    Si et sont d'espérance finie, alors :   Si et possèdent un moment d'ordre 2, alors : En utilisant la formule de dérivation composée, on obtient :         On revient au cas général. On suppose que et sont d'espérance finie.  Démontrer que la famille est sommable.  En déduire que est d'espérance finie et :         La famille est sommable car :   En sommant la famille, on obtient :       "
},
{
  "id": "sec-exos-approfondissement-10",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-10",
  "type": "Exercice",
  "number": "2.6.9",
  "title": "Convergence presque sûre.",
  "body": "Convergence presque sûre   Soit une suite de variables aléatoires réelles et une variable aléatoire réelle définies sur . On pose : On dit que la suite converge presque sûrement vers si .     Montrer que l'on a , où :     On a : En d'autres termes, est l'ensemble des pour lesquels la suite converge vers . On peut réécrire comme : Par continuité décroissante de la probabilité, on a :       On suppose que : Montrer que la suite converge presque sûrement vers .    Par hypothèse, pour tout , on a : Cela signifie que, pour tout , l'ensemble des pour lesquels pour une infinité de est de probabilité nulle. Par conséquent, pour presque tout , la suite converge vers , c'est-à-dire que .      Montrer que si la série de terme général converge pour tout , alors la suite converge presque sûrement vers .    Si la série de terme général converge pour tout , alors, d'après le lemme de Borel-Cantelli ( ), on a : En effet, le lemme de Borel-Cantelli affirme que si , alors . Appliqué à , cela donne : Par conséquent, la suite converge presque sûrement vers .    "
},
{
  "id": "sec-exos-approfondissement-11",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-approfondissement-11",
  "type": "Exercice",
  "number": "2.6.10",
  "title": "Loi forte des grands nombres dans <span class=\"process-math\">\\(L^2\\)<\/span>.",
  "body": "Loi forte des grands nombres dans  Soit une suite de variables aléatoires réelles indépendantes de même loi. On suppose que (a fortiori ). On pose et Nous savons d’après le cours que pour tout , Nous nous proposons d’établir une résultat un peu plus fort.    Soit , majorer en fonction de la variance de la variable aléatoire .    Rappelons que admet une variance et du fait de l’indépendance puis de la loi commune, Utilisons l’inégalité de Bienaymé-Tchebychev, C’est cette inégalité qui permet de montrer la loi faible des grands nombres.      Montrer que la série converge.    On a , terme général en d’une série positive convergente donc la série converge.      En déduire que presque sûrement, . Indication : on pourra utiliser le lemme de Borel-Cantelli ( ).    Utilisons le lemme de Borel-Cantelli ( ), il existe un événement tel que       On suppose dans cette question que les sont positifs. Montrer que presque sûrement, .    Comme les sont positifs, pour tout , la suite est croissante. Pour un quelconque, il existe tel que et on a , d'où Or (en effet ) donc, par encadrement, pour , .      On pose et . On a et . Montrer que l’on a toujours presque sûrement, . Ce résultat est appelé loi forte des grands nombres, on peut le démontrer avec l’hypothèse mais la démonstration est plus difficile.    Posons . On a . et restent des familles de variables aléatoires indépendantes de même loi et d'espérance au carré fini, de plus . On dispose des événements et de probabilité 1 tels que Pour , donc pour , et on a bien .    "
},
{
  "id": "sec-exos-application-2",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-application-2",
  "type": "Exercice",
  "number": "2.6.11",
  "title": "Lancer de pièce jusqu’au premier pile.",
  "body": "Lancer de pièce jusqu'au premier pile   On lance une pièce de monnaie jusqu'à l'obtention du premier pile, la probabilité d'obtenir pile étant . Soit la variable aléatoire représentant le nombre de lancers nécessaires. Si , on relance ensuite fois la pièce et on appelle la variable aléatoire représentant le nombre de piles obtenu.    Déterminer la loi de , celle du couple , puis la loi de .    Montrer que a même loi que le produit de deux variables indépendantes et telles que suive une loi de Bernoulli et une loi géométrique de même paramètre.    En déduire l'espérance et la variance de .   "
},
{
  "id": "ex-16-18",
  "level": "2",
  "url": "sec-probas-exercices.html#ex-16-18",
  "type": "Exercice",
  "number": "2.6.12",
  "title": "Temps d’attente de <span class=\"process-math\">\\(r \\)<\/span> succès consécutifs.",
  "body": "Temps d'attente de succès consécutifs   On considère une suite d'épreuves de Bernoulli indépendantes. À chaque épreuve, la probabilité de succès est . On se donne un entier strictement positif. Pour , on note la probabilité qu'au cours des premières épreuves, on ait obtenu succès consécutifs (au moins une fois).        Calculer , , ..., .    Montrer que, pour , on a :     Montrer que la suite est convergente. Calculer sa limite.         On a , car il faut au moins épreuves pour obtenir succès consécutifs. Pour , la probabilité d'obtenir succès consécutifs est .    Pour , on note l'événement « la -ième épreuve est un succès » et l'événement « au cours des premiers tirages, on a obtenu succès consécutifs ». On a clairement , donc . L'événement est réalisé si on obtient succès consécutifs pour la première fois entre le -ième et le -ième tirage, ce qui impose que la -ième épreuve soit un échec et qu'on n'ait pas obtenu succès consécutifs avant. On a donc : Par indépendance des épreuves, on obtient : D'où la relation :     La suite est croissante et majorée par 1, donc elle converge. On note sa limite. Par passage à la limite dans la relation précédente, on obtient : En simplifiant, on trouve : Comme , on a , donc , c'est-à-dire . Ainsi, la suite converge vers 1.           Déduire de la question 1 que l'on peut définir une variable aléatoire égale au temps d'attente de succès consécutifs. On définira comme l'événement « on a obtenu des succès aux épreuves de rang , , ..., sans jamais avoir obtenu succès consécutifs auparavant ».    Montrer en utilisant le résultat de que :          Comme la suite est croissante, on a : On obtient de manière presque sûre une suite de succès consécutifs au bout d'un nombre fini d'épreuves. Sur un ensemble de probabilité 1, on peut définir l'application . On a, par définition , donc est un événement et une variable aléatoire à valeurs dans .    Pour tout , on a et donc . D'après la question 1, on a pour tout : D'après , on en déduit :       "
},
{
  "id": "ex-16-28",
  "level": "2",
  "url": "sec-probas-exercices.html#ex-16-28",
  "type": "Exercice",
  "number": "2.6.13",
  "title": "File d’attente avec un guichet.",
  "body": "File d'attente avec un guichet   On considère une file d'attente avec un guichet et clients qui attendent. Chaque minute, un guichet se libère. le client suivant est alors choisi le processus aléatoire suivant :   Avec probabilité , il appelle le client en première position dans la file,  Sinon, il choisit de manière équiprobable parmi les autres clients.   Enfin, un nouveau client arrive dans la file et se place en dernière position (de telle sorte qu'il y a toujours exactement clients qui attendent). Pour tout , on note le temps d'attente du client qui occupe la position dans la file.    Quelle est la loi de ? Donner son espérance et sa variance.   À chaque instant, le client en première position peut être choisi avec une probabilité . Dans le cas contraire, il reste en première position. L'ensemble des valeurs prises par est donc et pour , on a . En effet, cela signifie que fois, a pas été choisi, avant qu'il soit choisi la -ième fois. Ainsi, suit la loi géométrique de paramètre et l'on a :      Montrer que, pour tout , la variable est d'espérance finie.   Pour un client quelconque de la file d'attente, la probabilité d'être servi à un moment donné est supérieure ou égale à , et donc la probabilité de ne pas être servi est inférieure ou égale à . On en déduit que, pour tout , on a , car il faut pour que soit réalisé que le client initialement à la -ième place n'ait pas été choisi fois. Ainsi, est majorée par une suite géométrique convergente. On en déduit que la série de terme général converge. Ainsi, est d'espérance finie.     Écrire une relation entre et pour tout . En déduire une expression de en fonction de et . On pourra considérer la suite .   Soit . On note la variable représentant le premier choix du client à servir. Après ce choix, le client qui est à la -ième place avance d'une place si , ne bouge pas si , et quitte la file si . On a donc, pour :   Sachant que : on obtient, en appliquant la formule des probabilités totales : Comme , on a : On en déduit : La suite est arithmétique de raison et de premier terme . On obtient, pour : et donc :      Comparer les caractéristiques de cette file d'attente et d'une file d'attente « classique » (premier arrivé, premier servi).   Dans une file d'attente classique, le temps d'attente du -ième client serait . On observe que, pour , on a , l'inégalité étant stricte pour . Cela montre que le temps d'attente moyen dans cette file d'attente est plus long que dans une file d'attente classique, sauf pour le dernier client.    "
},
{
  "id": "sec-exos-application-5",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-application-5",
  "type": "Exercice",
  "number": "2.6.14",
  "title": "Loi Zeta.",
  "body": "Loi Zeta   Soit l'ensemble des nombres premiers. Pour , on note et une variable aléatoire à valeurs dans dont la loi est définie par :      Justifier qu'on définit bien ainsi la loi d'une variable aléatoire.    Les réels , pour , sont positifs et par définition, donc on définit bien la loi d'une variable aléatoire.      Pour tout , on considère . Montrer que est une famille d'événements indépendants. En déduire une preuve probabiliste de :     Pour tout , est un événement et : Soit des nombres premiers distincts. Ces nombres sont premiers entre eux donc, d'après le théorème de Gauss : On en déduit : Les événements de la famille sont donc indépendants. On en déduit que est aussi une famille d'événements indépendants. Notons la suite des entiers premiers rangés par ordre croissant. On a : Par indépendance des événements, on a : Par continuité décroissante, on a : Mais , car 1 est le seul entier qui n'ait pas de diviseur premier. Comme , on en déduit :       Montrer que la probabilité qu'aucun carré différent de 1 ne divise vaut .    Notons l'événement « aucun carré différent de 1 ne divise ». L'événement est réalisé si, et seulement si, le carré d'aucun nombre premier ne divise . On a donc et toujours par indépendance des événements : On a : Ainsi :     Densité naturelle d'une partie de    Soit une partie de telle que la suite converge. On note sa limite et on l'appelle densité naturelle de .  Montrer que .    Traitons d'abords le cas où est infini. Soit , posons pour tout , . On a par hypothèse : donc il existe tel que :   On écrit alors :   On s'intéresse au terme . On a :   Puisque est infini, soit la suite strictement croissante de ses éléments. Il s'ensuit alors que pour , . Posons alors :   On a donc : car et donc . D'où :   On fait alors de même à gauche et on trouve pour assez proche de 1 que : ainsi :   Si maintenant est fini et est un entier majorant de alors d'un côte et donc et par suite . De l'autre et donc .    "
},
{
  "id": "sec-exos-application-6",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-application-6",
  "type": "Exercice",
  "number": "2.6.15",
  "title": "",
  "body": " Le but de cet exercice est de montrer qu'il n'existe pas de probabilité sur telle que pour tout , . On note la suite croissante des nombres premiers. On raisonne par l'absurde en supposant que cette probabilité existe.    Montrer que les événements pour sont indépendants.    Soit une partie finie de . On a Ainsi, les événements sont indépendants.      Que penser de la nature de la série ?    On sait que la série diverge (voir exercice 1.17 p. 39). Puisque , la série diverge également.      Conclure.    On applique le lemme de Borel-Cantelli puisque les événements sont indépendants, Ainsi, pour presque tout entier , il existe une infinité de nombres premiers le divisant... ce qui est évidemment absurde. Par conséquent, une telle probabilité ne peut pas exister.    "
},
{
  "id": "sec-exos-application-7",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-application-7",
  "type": "Exercice",
  "number": "2.6.16",
  "title": "Théorème de Weierstrass.",
  "body": "Théorème de Weierstrass   Soit une fonction continue de dans . Soit . On considère une suite de variables de Bernoulli de paramètre , indépendantes, sur le même espace probabilisé. Pour , on pose .     Montrer que :     Montrer que :      En déduire que la suite de fonctions polynomiales définie par converge uniformément vers sur .    "
},
{
  "id": "sec-exos-application-8",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-application-8",
  "type": "Exercice",
  "number": "2.6.17",
  "title": "Une série à termes aléatoires.",
  "body": "Une série à termes aléatoires  Soit une suite de variables aléatoires indépendantes de même loi géométrique de paramètre avec , On se propose d’étudier la convergence de la série Posons    Déterminer pour .  Puisque , la convergence de la série de Riemann     On suppose dans cette question que .  Montrer que pour , .  En utilisant le lemme de Borel-Cantelli ( ), montrer que   En déduire la nature presque sûre de la série       Pour , on a    Soit . Remarquons que donc la série de terme général avec converge et on conclut par le lemme de Borel-Cantelli ( ).  Considérons . On a et pour , il existe tel que pour tout , Puisque , . La série diverge presque sûrement.      Traiter le cas en étudiant la probabilité pour un bien choisi.   On procède de même pour ,  On choisit tel que , ainsi la série converge. On peut appliquer le lemme de Borel-Cantelli ( ), il vient que a pour probabilité 1 et que pour , il existe tel que pour tout , donc la série diverge (par comparaison avec une intégrale, on sait que l’intégrale de Bertrand diverge). La série diverge presque sûrement.    "
},
{
  "id": "sec-exos-thematique-2",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-thematique-2",
  "type": "Exercice",
  "number": "2.6.18",
  "title": "Taux de panne.",
  "body": "Taux de panne   Soit une variable aléatoire discrète à valeurs dans vérifiant :  représente le moment où un mécanisme tombe en panne. C'est à dire le numéro de l'instance de son cycle de fonctionnement où il tombe en panne. En principe, sous l'effet de l'usure, plus la durée de son fonctionnement est grande plus la probabilité que le mécanisme tombe en panne augmente.  que On appelle taux de panne associé à la suite réelle définie par :  est la probabilité pour que le mécanisme tombe en panne à l'instant sachant qu'il a fonctionné jusqu'à cet instant.     Exprimer en fonction des .    Éviter de diviser par . Exprimer comme un produit de facteurs .         On a donc . Ce qui donne On en déduit que Ce qui donne par télescopage La relation signifie que donc finalement     Caractérisation du taux de panne      Montrer que pour tout et que la série de terme général diverge.    Réciproquement, soit une suite à valeur dans telle que la série de terme général diverge. Montrer qu'il existe une variable aléatoire dont le taux de panne est la suite .       On rappelle que pour une suite de réels positifs sommable et de somme , il existe une variable aléatoire telle que pour tout .      Soit et supposons que . Alors , ou encore . Ce qui implique que contredisant l'hypothèse faite dans l'énoncé. Alors .  Ensuite est le reste de la série convergente donc il converge vers . Ce qui implique que La série est nécessairement divergente car dans le cas contraire convergerait vers et on aurait donc ce qui impliquerait que la série est convergente.    Soit une série divergente à termes dans et posons pour tout  Avec ces relations on a On peut ensuite écrire Puisque la série de réels positif est divergente positive sa suite des sommes partielles tend vers et on a donc . Par suite . Puisque alors la série est convergente de somme .  Il existe donc une VADR  tel que pour tout .        Montrer que la variable suit une loi géométrique si, et seulement si, son taux de panne est constant.    On suppose que suit une loi géométrique de paramètre . Alors pour tout on a . Donc Par suite . Donc le taux de panne est constant. Réciproquement, on suppose que le taux de panne est constant de valeur . Alors pour tout on a . Donc suit une loi géométrique de paramètre .  Noter que cela signifie que le taux de panne est constant si et seulement si les événements «le mécanisme tombe en panne à l'instant » sont mutuellement indépendants et ont tous la même probabilité. Il n'y a aucun effet d'usure.    "
},
{
  "id": "sec-exos-thematique-3",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-thematique-3",
  "type": "Exercice",
  "number": "2.6.19",
  "title": "Maximums et minimums provisoires.",
  "body": "Maximums et minimums provisoires   Soit . On désigne par l'ensemble des permutations de . On munit de la probabilité uniforme. Pour et , on dit que est un maximum provisoire (resp. minimum provisoire ) de si : On désigne par (resp. ) les variables aléatoires représentant le nombre de maximums (resp. minimums) provisoires des permutations de .     Montrer que les variables et ont même loi.    On observe qu'en , il y a toujours un maximum et un minimum provisoire, et donc que et sont à valeurs dans . L'application qui à la permutation associe la permutation est clairement bijective. Pour , est un maximum provisoire de si, et seulement si, est un minimum provisoire de . En effet : ce qui équivaut à : On en déduit que, pour tout , Comme est bijective, on a , et donc , car est muni de la probabilité uniforme.      Déterminer la loi de , son espérance et sa variance.      La permutation est dans si, et seulement si, . On en déduit .  On a . On en déduit .  Enfin, .  On obtient :       Déterminer la loi du couple et sa covariance.    Pour , on a si . En effet, sauf pour , ne peut pas être à la fois un maximum provisoire et un minimum provisoire. On obtient : On trouve :     "
},
{
  "id": "sec-exos-thematique-4",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-thematique-4",
  "type": "Exercice",
  "number": "2.6.20",
  "title": "Modèle de Galton-Watson.",
  "body": "Modèle de Galton-Watson   On observe des virus qui se reproduisent tous selon la même loi avant de mourir : un virus donne naissance en une journée à virus, où est une variable aléatoire à valeurs dans . Pour tout , on note . On suppose et . On note la fonction génératrice de .  On part au jour zéro de virus. Au premier jour, on a donc virus, où suit la loi de ; chacun de ces virus évolue alors indépendamment des autres virus et se reproduit selon la même loi avant de mourir : cela conduit à avoir virus au deuxième jour ; et le processus continue de la sorte. On note .     Calculer et .    Par définition, . Comme , on a : Pour , on a . Comme suit la loi de , on a :       Montrer que la suite est convergente.    La suite est croissante car si , alors . Ainsi, . De plus, la suite est majorée par 1, car . Par le théorème de la convergence monotone, la suite est convergente.      Montrer que pour tout entier , on a .    On écrit, avec la formule des probabilités totales : Si , alors est la somme de variables indépendantes de même loi que . Ainsi : On obtient donc : où est la fonction génératrice de .      Que peut-on dire de la limite de ? Discuter selon la valeur de . Interpréter le résultat.    La limite de la suite vérifie , car et est continue. On a donc : La fonction est convexe et croissante sur , avec et . On distingue deux cas :  Si , alors a une unique solution . Ainsi, la probabilité que la population s'éteigne est 1.  Si , alors a deux solutions : et une autre solution . La probabilité que la population s'éteigne est .  Interprétation : Si l'espérance de reproduction est faible ( ), la population s'éteint presque sûrement. Si elle est forte ( ), il y a une probabilité non nulle que la population survive indéfiniment.    "
},
{
  "id": "sec-exos-thematique-5",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-thematique-5",
  "type": "Exercice",
  "number": "2.6.21",
  "title": "Variables aléatoires symétriques et inégalité de Paul Lévy.",
  "body": "Variables aléatoires symétriques et inégalité de Paul Lévy   Toutes les variables considérées dans cet exercice sont à valeurs dans . Une variable aléatoire à valeurs dans est dite symétrique si :       Montrer que si est symétrique, alors est une médiane de , c'est-à-dire :   Montrer que si et sont deux variables aléatoires indépendantes de même loi, alors est symétrique.  Montrer que si et sont deux variables aléatoires symétriques indépendantes, alors est symétrique.      On a : Comme , on en déduit : De même, on a : Ainsi, est une médiane de .  Soit et deux variables aléatoires indépendantes de même loi. Pour tout , on a : En utilisant le fait que et ont même loi, on obtient : Ainsi, est symétrique.  Soit et deux variables aléatoires symétriques indépendantes. Pour tout , on a : En utilisant la symétrie de et , on obtient : Ainsi, est symétrique.      On considère des variables aléatoires symétriques , indépendantes. On se donne . Pour , on pose et, de plus, on note l'événement : et .  Montrer que est symétrique.  Montrer que, pour , on a : et   Prouver que .  En déduire l'inégalité de Paul Lévy :       Par récurrence sur , en utilisant le résultat de la question 1.(c), on montre que est symétrique.    On a , d'où l'inclusion.  Les événements et sont indépendants car est une fonction de , tandis que est une fonction de . Ainsi : Comme est symétrique, on a , d'où le résultat.    L'événement est réalisé si, et seulement s'il existe un indice tel que et pour tout . Cela correspond exactement à la définition de .  En utilisant les résultats précédents, on a :      "
},
{
  "id": "sec-exos-thematique-6",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-thematique-6",
  "type": "Exercice",
  "number": "2.6.22",
  "title": "Marche aléatoire dans <span class=\"process-math\">\\(\\mathbb{Z}\\)<\/span> : premier retour à l’origine.",
  "body": "Marche aléatoire dans : premier retour à l'origine   Soit une suite de variables aléatoires, sur le même espace probabilisé , indépendantes et de même loi définie par : où . On pose et, pour tout , . La suite est appelée marche aléatoire dans .    Déterminer pour tout .    On note la somme de la série entière . Montrer que :     Pour tout entier naturel non nul , on note l'événement « le mobile retourne pour la première fois à l'origine au bout de déplacements », c'est-à-dire : On pose pour tout et .    Montrer que, pour tout entier naturel non nul, on a :     En déduire que, pour tout entier naturel non nul , on a :      "
},
{
  "id": "ex-16-23",
  "level": "2",
  "url": "sec-probas-exercices.html#ex-16-23",
  "type": "Exercice",
  "number": "2.6.23",
  "title": "Inégalité de Kolmogorov.",
  "body": "Inégalité de Kolmogorov   Soit des variables aléatoires réelles discrètes de l'espace probabilisé , indépendantes, ayant un moment d'ordre 2, centrées, ainsi que . On pose, pour tout :      Montrer que, pour , les variables et sont indépendantes. En déduire que :     Si , on a et cette variable aléatoire est indépendante de toute autre variable aléatoire. Supposons donc . On a : donc est une fonction des variables aléatoires . D'autre part, on a , donc est une fonction des variables aléatoires . Les variables aléatoires étant indépendantes, il en est de même de et .  Les variables aléatoires sont dans , donc il en est de même des variables aléatoires . Les variables aléatoires , et ont une espérance finie, car elles sont positives et inférieures respectivement à , et , qui ont une espérance finie. On a, par linéarité de l'espérance : Les variables aléatoires et sont indépendantes, donc : car . On a donc l'égalité voulue.  Soit :  Si , alors .  Si , alors .  On a donc , d'où l'on déduit : Comme , on a a fortiori :       On pose . Montrer que .    Soit . Alors si, et seulement s'il existe tel que . Alors est le plus petit tel entier si, et seulement si, . On en déduit que . Les événements sont incompatibles, donc :       En déduire l'inégalité de Kolmogorov :     De la question 1, on déduit : Mais , donc : car . On obtient :     "
},
{
  "id": "ex-16-24",
  "level": "2",
  "url": "sec-probas-exercices.html#ex-16-24",
  "type": "Exercice",
  "number": "2.6.24",
  "title": "Inégalité de Le Cam.",
  "body": "Inégalité de Le Cam   L'objet de cet exercice est d'étudier l'approximation de la loi binomiale par la loi de Poisson. Toutes les variables aléatoires considérées sont définies sur le même espace probabilisé et sont à valeurs dans .     Soit et deux variables aléatoires. Pour tout , on pose et . On définit la distance entre et par :     Montrer que pour toute partie de , on a :     Démontrer la formule :     En déduire que :         Pour toute partie de , on a :     On a : Donc :     L'événement contraire de est . On a donc : Ainsi :         Soit des variables aléatoires mutuellement indépendantes. On suppose que, pour , suit la loi de Bernoulli de paramètre et suit la loi de Poisson de paramètre . On pose . Enfin, pour , on considère la variable de Bernoulli telle que si et sinon.    Déterminer pour tout , la loi de . En déduire la loi de . Quelle est la loi de ?    Montrer que pour tout :     En déduire l'inégalité de Le Cam :         Pour tout , la variable est à valeur dans . On a : Donc suit la loi de Bernoulli de paramètre . La variable suit donc la loi binomiale de paramètre . La variable , somme de variables de Poisson indépendantes de paramètre , suit la loi de Poisson de paramètre .    On a : Or, pour tout , , donc :     On a montré que . Or : Donc :       "
},
{
  "id": "sec-exos-thematique-9",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-thematique-9",
  "type": "Exercice",
  "number": "2.6.25",
  "title": "Fonction génératrice des moments.",
  "body": "Fonction génératrice des moments   Soit une variable aléatoire discrète, pas presque sûrement constante, sur l'espace probabilisé . On pose, pour ,  est appelée la fonction génératrice des moments de la variable aléatoire . On suppose qu'il existe un intervalle contenant tel que pour tout .       Soit deux réels tels que . On considère tel que . Soit . Montrer qu'il existe tel que : En déduire que est d'espérance finie pour tout .  Montrer que est de classe sur et vérifie : En déduire, pour tout , une expression du moment d'ordre de . On note l'espérance de .      Pour et , on a : où est une constante positive. Comme et ont une espérance finie, il en est de même pour .  La fonction est dérivable sur et sa dérivée est donnée par : Par récurrence, on montre que est de classe et que : En particulier, pour , on a :          On pose, pour tout , . Montrer que est strictement convexe.  On note et on pose , pour tout . Montrer que . Calculer ; montrer que si .  Montrer que :   En déduire les inégalités de Chernov :        La fonction est strictement convexe car sa dérivée seconde est strictement positive :   On a , donc . De plus, car . Si , alors par convexité de .  La fonction atteint son maximum en un point tel que . Si , alors ; si , alors .  En utilisant l'inégalité de Markov, on a : De même, pour , on a :      "
},
{
  "id": "ex-16-21",
  "level": "2",
  "url": "sec-probas-exercices.html#ex-16-21",
  "type": "Exercice",
  "number": "2.6.26",
  "title": "Chaînes de Markov.",
  "body": "Chaînes de Markov   Soit et une suite de variables aléatoires sur un espace probabilisé , à valeurs dans . On dit que est une chaîne de Markov homogène s'il existe une matrice telle que, pour tout entier et tous éléments de , on ait : La matrice est appelée matrice de transition de la chaîne. Dans la suite, on considère une telle chaîne de Markov.     Montrer que est une matrice à coefficients positifs dont la somme des coefficients de chaque ligne est égale à 1 (on dit que est une matrice stochastique). Montrer que 1 est valeur propre de .    Les coefficients de sont positifs car ce sont des probabilités. Pour tout , on a : Ainsi, est une matrice stochastique. Soit le vecteur colonne à lignes, dont tous les coefficients sont égaux à 1. On a , donc 1 est valeur propre de .         Soit tel que . Montrer que, pour et dans , on a : En déduire que : où est le coefficient d'indice de la matrice .    Montrer que, pour et dans , tels que , on a :          On démontre la propriété par récurrence sur . Pour , on a : Supposons la propriété vraie au rang ( ) et montrons-la au rang . Si , on peut écrire : Par hypothèse de récurrence, on a : De plus, par définition de la chaîne de Markov, on a : On en déduit : Pour obtenir la loi conditionnelle de sachant , il faut sommer l'égalité précédente par rapport à . On obtient : où est le coefficient d'indice de la matrice .    L'événement qui contient est a fortiori de probabilité non nulle. On a donc : En utilisant la propriété de Markov, on obtient : Par ailleurs, on a : On en déduit que :         On suppose désormais que tous les coefficients de sont strictement positifs. On pose . On fixe un élément , et l'on considère les suites :    Montrer que pour tout entier naturel :     Montrer que les suites et convergent vers la même limite.    En déduire qu'il existe une probabilité sur , c'est-à-dire une famille d'entiers positifs, de somme 1, telle que : Montrer que est la seule probabilité invariante par , c'est-à-dire vérifiant .         Pour tout entier naturel , on a : Comme pour tout , on a : De même, on a :     Les suites et sont adjacentes. En effet, on a : Comme , la suite converge vers 0. Ainsi, les suites et convergent vers la même limite.    On note la limite commune de et . Pour tout , on a : Ainsi, la probabilité est invariante par , c'est-à-dire . De plus, est la seule probabilité invariante par , car si est une autre probabilité invariante, on a pour tout , et donc par passage à la limite.      "
},
{
  "id": "ex-16-29",
  "level": "2",
  "url": "sec-probas-exercices.html#ex-16-29",
  "type": "Exercice",
  "number": "2.6.27",
  "title": "Sur l’espérance d’un produit.",
  "body": "Sur l'espérance d'un produit   Soit et deux variables aléatoires réelles d'espérance finie sur le même espace probabilisé. On considère les trois propriétés suivantes :   et sont presque sûrement constantes ;  et sont indépendantes ;  est d'espérance finie et .      Montrer que (i) (ii) et que (ii) (iii), mais qu'aucune réciproque n'est vraie.       (i) (ii) : Si est presque sûrement constante, alors l'événement est de probabilité 0 ou 1, pour tout réel , donc est indépendant de l'événement , pour tout réel. Les variables et sont donc indépendantes. On remarque qu'il suffit qu'une des deux variables aléatoires soit presque sûrement constante pour que (ii) soit vérifiée. La réciproque est fausse. Si est un couple de variables aléatoires suivant la loi uniforme sur , les variables et suivent une loi de Bernoulli de paramètre et sont indépendantes, sans être presque sûrement constantes.   (ii) (iii) : L'implication (ii) (iii) est un théorème du cours. La réciproque est fausse. Si est une variable réelle suivant la loi uniforme sur et , on a et , donc . Mais et ne sont pas indépendantes, car :        Montrer que (iii) (i) est vrai s'il existe et strictement croissantes ainsi qu'une variable aléatoire réelle telle que et . On admettra qu'aucune généralité n'est perdue à supposer qu'il existe une seconde variable aléatoire indépendante de et suivant la même loi que . On introduira la fonction : et on s'intéressera à la variable .   On suppose que (iii) est vérifiée et qu'il existe et strictement croissantes ainsi qu'une variable aléatoire réelle telle que et . Comme et sont croissantes, et ont le signe de , donc , pour tout . On en déduit que la variable est à valeurs positives. On écrit : La variable aléatoire est d'espérance finie. La variable aléatoire a même loi que et donc même espérance. On a et a même loi que . Les variables et sont indépendantes car et le sont, et d'espérance finie. On en déduit que est d'espérance finie et : On démontre de même que . Ainsi, est une somme de variables aléatoires d'espérance finie. Elle est donc d'espérance finie et, par linéarité de l'espérance : Comme est une variable aléatoire positive, on en déduit qu'elle est presque sûrement nulle. Il existe un événement de probabilité égale à 1 tel que l'on ait , pour tout . Si , on a ou , et comme et sont strictement croissantes, on a . Si et sont deux réels distincts, l'événement est inclus dans et donc dans . Il est donc de probabilité nulle. Les variables aléatoires et sont indépendantes et a même loi que donc : Soit tel que (un tel existe car ). On a alors pour tout et donc . La variable est donc presque sûrement constante. On en déduit qu'il en est de même des variables aléatoires et .    "
},
{
  "id": "ex-16-30",
  "level": "2",
  "url": "sec-probas-exercices.html#ex-16-30",
  "type": "Exercice",
  "number": "2.6.28",
  "title": "Espérance conditionnelle.",
  "body": "Espérance conditionnelle   Soit et deux variables aléatoires sur le même espace probabilisé, à valeurs dans , telles que .    Montrer qu'il existe une variable aléatoire d'espérance finie, qui s'écrit , où est une fonction de dans , et telle que, pour toute application bornée de dans , on ait :    Si est bornée, il en est de même de la variable aléatoire . En notant un majorant de , on a , et comme est d'espérance finie, il en est de même de . Le théorème de transfert appliqué à la variable à valeurs dans et à la fonction donne : La famille est sommable, donc on a : Si , alors on peut écrire : et on a alors : La dernière somme est l'espérance de pour la probabilité conditionnelle , que l'on note . Par ailleurs, si , car pour tout . En posant : on obtient : D'après le théorème de transfert, on a : Cela est valable pour toute fonction bornée . En prenant pour la fonction constante égale à 1, on obtient que possède une espérance égale à . La variable aléatoire a les propriétés voulues.     Montrer que si une autre variable aléatoire a les mêmes propriétés que , elle est égale à presque sûrement.   Soit une autre variable aléatoire ayant les propriétés requises. Considérons tel que . En prenant , on obtient et l'égalité : Le théorème de transfert donne : On a donc : Par ailleurs, on a : On obtient donc : Posons et . Alors est un événement négligeable, car réunion au plus dénombrable d'ensembles négligeables. Les variables aléatoires et coïncident sur le complémentaire de , donc sont presque sûrement égales.     La variable aléatoire étant définie et unique, on la note : c'est l'espérance conditionnelle de par rapport à . Soit une application bornée de vers . Montrer que :    Par définition de l'espérance conditionnelle, il existe une fonction définie sur telle que : D'après les deux premières questions, on a pour tout tel que . Le théorème de transfert, appliqué à et à la fonction , donne : On a donc : On a donc sur le complémentaire de .    "
},
{
  "id": "sec-exos-recherche-4",
  "level": "2",
  "url": "sec-probas-exercices.html#sec-exos-recherche-4",
  "type": "Exercice",
  "number": "2.6.29",
  "title": "Théorème de Perron-Frobenius.",
  "body": "Théorème de Perron-Frobenius  Soit une matrice stochastique ( ).   1) On suppose dans cette question que pour c’est-à-dire qu’on passe de l’état à n’importe quel état avec une probabilité non nulle. On note .  Montrer que .  Pour un vecteur colonne. On note , et . On suppose que le vecteur est à coordonnées , montrer que   En déduire que . Montrer que la suite converge vers un vecteur de la forme   Théorème de Perron-Frobenius. Montrer que Que peut-on dire de la matrice ? De ses éléments propres ?  Soit . Montrer que et qu’il n’existe qu’un seul vecteur ligne tel que à un scalaire multiplicatif près. Donner une interprétation probabiliste. Décrire .      On sait que la somme des coefficients sur chaque ligne de la matrice vaut 1 donc en raisonnant sur une ligne où figure le minimum , on a , donc puisque .  Soit . Le coefficient est une moyenne pondérée des coefficients donc d'où Mais on peut faire mieux. À chaque ligne , où avec . Puisque , la moyenne pondérée est plus grande que , ainsi De même, en raisonnant sur le coefficient associé à avec , Pour tout , . Conclusion : .  Par récurrence immédiate, ; comme , Ainsi, toutes les suites coordonnées de convergent vers une même limite . Donc .  On considère les vecteurs colonnes de la base canonique . On a La matrice est de rang 1, on peut l'écrire sous la forme avec . On a (car , ou encore ). C'est la matrice d'un projecteur sur la droite . Elle admet pour valeurs propres 1 (de multiplicité 1) et 0 (de multiplicité ).  Par passage à la limite dans , on a , donc en regardant par exemple la première ligne, . Supposons que alors pour tout , donc par passage à la limite . En particulier (ce qui se voit aussi immédiatement). Ainsi, en supposant , et sont deux vecteurs (colonnes) propres de de valeur propre 1. Or cette valeur propre est simple (comme pour ) donc il existe tel que (et cela reste vrai si ). Ainsi, il n’existe qu’une seule loi de probabilité pour qui stabilise les lois des variables aléatoires . De plus, remarquons que si est un vecteur ligne de somme 1, c’est-à-dire une loi de probabilité sur , alors . La loi de pour très grand « tend vers » . Enfin, (la matrice étant stochastique).      2) On reprend la notation . On suppose dans cette question qu’il existe un tel que pour c’est-à-dire qu’on passe de l’état à n’importe quel état en étapes ( indépendant de et ) avec une probabilité non nulle.  Soit à coordonnées , montrer que est décroissante.  Montrer que et que l'on a les mêmes résultats qu'aux questions 1)d) et 1)e).      Cela a déjà été vu à la question 1)b), l’hypothèse n’étant pas utilisée.  La matrice stochastique vérifie les hypothèses de la première question donc . Or est une suite extraite de la suite décroissante donc cette dernière converge également vers 0. On peut alors reprendre les raisonnements de la question précédente.      3) On suppose dans cette question pour tout , il existe tel que c’est-à-dire qu’on passe de l’état à n’importe quel état en étapes ( dépendant de et ) avec une probabilité non nulle. On suppose de plus que pour tout , . (si on représente la matrice avec un graphe probabiliste, chaque état possède une boucle de probabilité )  Soit et tel que . Montrer que pour tout , .  Montrer qu'il existe tel que pour tout , .      On peut rédiger un raisonnement par récurrence. En termes probabilistes, cela se comprend bien : si l’on peut avec une probabilité non nulle passer de l’état à l’état en étapes, on le peut également en étapes quitte (par exemple) à stationner fois en à la fin.  Notons pour tout , un entier tel que . Posons , il est clair que pour tout , .      4) On reprend les hypothèses de la question 3) précédente sauf , .  On pose . Montrer que est une matrice stochastique vérifiant les hypothèses de la question 3).  Montrer que existe et que l'on a les mêmes résultats qu'aux questions 1)d) et 1de la matric e) pour la matrice .  On note une ligne de la matrice . Montrer que et qu’il n’existe qu’un seul vecteur ligne tel que à un scalaire multiplicatif près.  Montrer que la matrice est inversible. Indication : calculer .  Montrer que .  Simplifier .  En déduire que .  Étudier les cas particuliers suivants :  Graphes           C’est immédiat, plus généralement il est facile de voir que l’ensemble des matrices stochastiques forme un convexe de .  On applique les résultats de la question 3) à la matrice .  On a le résultat pour la matrice . Or .  Soit un vecteur colonne tel que . Montrons que . On a donc . Cela entraîne vu la forme de que . On en déduit que donc, d’après la question 1)e), il existe tel que . Mais donc .  On sait que car . Or donc par combinaison.  On en déduit que pour donc    Il vient Comme est bornée ( est stochastique), . Ainsi Mais donc on a bien .    Ces exemples sont triviaux mais permettent de bien comprendre que l’on ne peut espérer avoir toujours convergence de la suite . Le premier graphe correspond à la matrice stochastique C’est une matrice circulante, on voit bien que la suite n’a pas de limite (on voit d’ailleurs que l’on ne peut trouver un commun à tous les couples ), en revanche tend vers les trois états sont autant occupés en moyenne.  Le deuxième graphe correspond à la matrice On a La suite n’a pas de limite, en revanche tend vers dont une ligne représente l’occupation moyenne de chaque état.       "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "License",
  "number": "",
  "title": "License",
  "body": " Ce livre est rédigé à l'aide de PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
