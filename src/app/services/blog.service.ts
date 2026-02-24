import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: Date;
  readTime: number;
  image: string;
  featured: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private articles: BlogArticle[] = [
    {
      id: '1',
      title: 'Angular 19 : Les nouvelles fonctionnalités qui changent tout',
      excerpt: 'Découvrez les améliorations majeures d\'Angular 19, notamment les signaux, les contrôles de formulaires et les performances optimisées.',
      content: `Angular 19 apporte des changements significatifs à la plateforme. Les signaux offrent une réactivité plus intuitive, les contrôles de formulaires sont plus robustes, et les performances sont considérablement améliorées. Dans cet article, nous explorons comment ces nouvelles fonctionnalités peuvent transformer vos applications.

                Les signaux permettent une gestion d'état plus simple et plus performante. Au lieu de gérer les observables complexes, vous pouvez maintenant utiliser des signaux pour une réactivité directe et prévisible.

                Les contrôles de formulaires ont été refactorisés pour offrir une meilleure API et une meilleure expérience développeur. La validation est plus intuitive et les erreurs sont plus faciles à gérer.

                Les performances sont au cœur d'Angular 19, avec des optimisations dans le compilateur et le runtime qui réduisent la taille des bundles et améliorent les temps de chargement.`,
      category: 'Angular',
      tags: ['Angular', 'TypeScript', 'Frontend', 'Signaux', 'Performances'],
      author: 'William Ndongmo',
      date: new Date('2026-02-15'),
      readTime: 8,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: '2',
      title: 'Maîtriser Salesforce Apex : Bonnes pratiques et pièges à éviter',
      excerpt: 'Un guide complet pour écrire du code Apex propre, performant et maintenable. Découvrez les bonnes pratiques et les erreurs courantes à éviter.',
      content: `Salesforce Apex est un langage puissant, mais il peut être facile de faire des erreurs qui impactent les performances et la maintenabilité. Dans ce guide, nous explorons les bonnes pratiques pour écrire du code Apex professionnel.

                Gouvernance des gouverneurs : Salesforce impose des limites strictes sur les ressources. Comprendre ces limites est crucial pour éviter les erreurs d'exécution.

                Optimisation des requêtes SOQL : Les requêtes inefficaces peuvent rapidement atteindre les limites de gouvernance. Utilisez des index, limitez les résultats et évitez les boucles imbriquées.

                Gestion des exceptions : Une bonne gestion des erreurs rend votre code plus robuste et plus facile à déboguer.

                Tests unitaires : Salesforce exige 75% de couverture de code. Écrivez des tests significatifs qui valident votre logique métier.`,
      category: 'Salesforce',
      tags: ['Salesforce', 'Apex', 'Backend', 'Bonnes pratiques', 'Performance'],
      author: 'William Ndongmo',
      date: new Date('2026-02-10'),
      readTime: 12,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: '3',
      title: 'Tailwind CSS vs Bootstrap : Comparaison et guide de migration',
      excerpt: 'Analysons les différences entre Tailwind CSS et Bootstrap, et comment migrer votre projet existant vers Tailwind pour plus de flexibilité.',
      content: `Tailwind CSS et Bootstrap sont deux frameworks CSS populaires, mais ils prennent des approches très différentes. Tailwind utilise une approche utility-first, tandis que Bootstrap fournit des composants pré-stylisés.

                Approche Utility-First : Tailwind vous donne des classes utilitaires que vous composez pour créer vos designs. Cela offre plus de flexibilité et de contrôle.

                Composants Pré-stylisés : Bootstrap fournit des composants prêts à l'emploi, ce qui accélère le développement initial mais limite la personnalisation.

                Taille du Bundle : Tailwind génère un CSS optimisé basé sur votre utilisation réelle, tandis que Bootstrap inclut tous les composants.

                Courbe d'apprentissage : Tailwind a une courbe d'apprentissage plus douce une fois que vous comprenez la philosophie utility-first.

                Migration : Si vous migrez de Bootstrap vers Tailwind, commencez par les composants simples et progressez vers les plus complexes.`,
      category: 'CSS',
      tags: ['CSS', 'Tailwind', 'Bootstrap', 'Frontend', 'Design'],
      author: 'William Ndongmo',
      date: new Date('2026-02-05'),
      readTime: 10,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: '4',
      title: 'Node.js et Express : Construire des APIs REST robustes',
      excerpt: 'Apprenez à construire des APIs REST sécurisées et performantes avec Node.js et Express, incluant l\'authentification JWT et la gestion des erreurs.',
      content: `Node.js et Express offrent une plateforme puissante pour construire des APIs REST. Dans ce guide, nous couvrons les meilleures pratiques pour créer des APIs robustes et maintenables.

                Architecture : Organisez votre code avec une structure claire : routes, contrôleurs, services et modèles.

                Authentification JWT : Implémentez une authentification sécurisée avec JSON Web Tokens.

                Gestion des erreurs : Créez un système de gestion des erreurs cohérent et informatif.

                Validation : Validez toutes les entrées utilisateur pour éviter les injections et les erreurs.

                Tests : Écrivez des tests unitaires et d'intégration pour assurer la qualité de votre code.

                Déploiement : Déployez votre API sur des plateformes comme Railway ou Heroku.`,
      category: 'Backend',
      tags: ['Node.js', 'Express', 'API REST', 'Backend', 'JavaScript'],
      author: 'William Ndongmo',
      date: new Date('2026-01-28'),
      readTime: 15,
      image: 'https://firebasestorage.googleapis.com/v0/b/solsolutionpdf.firebasestorage.app/o/prod%2Fimgs%2Fnode-js-api.png?alt=media&token=b36c755c-c0e1-41c1-9842-90877c56dfec',
      featured: false
    },
    {
      id: '5',
      title: 'Lightning Web Components : Créer des composants réutilisables',
      excerpt: 'Un tutoriel complet sur la création de Lightning Web Components (LWC) pour Salesforce, avec des exemples pratiques et des bonnes pratiques.',
      content: `Lightning Web Components (LWC) sont la technologie moderne pour développer sur Salesforce. Ils offrent une meilleure performance et une meilleure expérience développeur que Visualforce.

                Structure d'un LWC : Un LWC se compose d'un fichier HTML, d'un fichier JavaScript et d'un fichier XML pour les métadonnées.

                Réactivité : Utilisez les propriétés réactives et les getters pour mettre à jour automatiquement votre composant.

                Communication entre composants : Utilisez les événements personnalisés pour communiquer entre composants.

                Intégration avec Apex : Appelez facilement du code Apex depuis vos LWC avec des décorateurs comme @wire.

                Tests : Testez vos LWC avec Jest et Lightning Web Components Testing Library.`,
      category: 'Salesforce',
      tags: ['Salesforce', 'LWC', 'Lightning Web Components', 'Frontend', 'JavaScript'],
      author: 'William Ndongmo',
      date: new Date('2026-01-20'),
      readTime: 11,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: '6',
      title: 'Docker pour les développeurs : Containeriser vos applications',
      excerpt: 'Découvrez comment utiliser Docker pour containeriser vos applications et simplifier le déploiement en développement et en production.',
      content: `Docker révolutionne la façon dont nous développons et déployons les applications. Les conteneurs offrent une isolation, une portabilité et une scalabilité inégalées.

                Concepts de base : Comprenez les images, les conteneurs et les registres Docker.

                Dockerfile : Créez des images Docker personnalisées avec un Dockerfile bien structuré.

                Docker Compose : Orchestrez plusieurs conteneurs pour votre stack complet.

                Bonnes pratiques : Optimisez vos images pour la taille et la sécurité.

                Déploiement : Déployez vos conteneurs sur des plateformes comme Kubernetes ou Docker Swarm.`,
      category: 'DevOps',
      tags: ['Docker', 'DevOps', 'Containerisation', 'Infrastructure', 'Déploiement'],
      author: 'William Ndongmo',
      date: new Date('2026-01-15'),
      readTime: 9,
      image: 'https://firebasestorage.googleapis.com/v0/b/solsolutionpdf.firebasestorage.app/o/prod%2Fimgs%2FDocker_.webp?alt=media&token=45e80f99-1934-4468-b5c4-1505e7cb6760',
      featured: false
    }
  ];

  private articlesSubject = new BehaviorSubject<BlogArticle[]>(this.articles);
  public articles$ = this.articlesSubject.asObservable();

  private categoriesSubject = new BehaviorSubject<string[]>(this.getCategories());
  public categories$ = this.categoriesSubject.asObservable();

  constructor() {}

  getArticles(): Observable<BlogArticle[]> {
    return this.articles$;
  }

  getArticleById(id: string): BlogArticle | undefined {
    return this.articles.find(article => article.id === id);
  }

  getArticlesByCategory(category: string): BlogArticle[] {
    return this.articles.filter(article => article.category === category);
  }

  searchArticles(query: string): BlogArticle[] {
    const lowerQuery = query.toLowerCase();
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }

  getFeaturedArticles(): BlogArticle[] {
    return this.articles.filter(article => article.featured).slice(0, 3);
  }

  getLatestArticles(limit: number = 5): BlogArticle[] {
    return [...this.articles]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  getCategories(): string[] {
    const categories = new Set(this.articles.map(article => article.category));
    return Array.from(categories).sort();
  }

  getRelatedArticles(id: string, limit: number = 3): BlogArticle[] {
    const article = this.getArticleById(id);
    if (!article) return [];
    
    return this.articles
      .filter(a => a.id !== id && a.category === article.category)
      .slice(0, limit);
  }

  addArticle(article: BlogArticle): void {
    this.articles.push(article);
    this.articlesSubject.next([...this.articles]);
  }

  updateArticle(id: string, updates: Partial<BlogArticle>): void {
    const index = this.articles.findIndex(article => article.id === id);
    if (index !== -1) {
      this.articles[index] = { ...this.articles[index], ...updates };
      this.articlesSubject.next([...this.articles]);
    }
  }

  deleteArticle(id: string): void {
    this.articles = this.articles.filter(article => article.id !== id);
    this.articlesSubject.next([...this.articles]);
  }
}
