# DevOps Portfolio Project

Полный цикл разработки и развертывания веб-приложения: от кода до production-инфраструктуры в Kubernetes.

🔗 **Живой проект:** https://das-devops.site/
🐳 **Docker Hub:** https://hub.docker.com/repositories/tytsvaga

## 🏗 Архитектура проекта

### 1. Приложение (`/app`)
*   Статический сайт-портфолио (HTML, CSS, JS).
*   Упакован в Docker-образ на базе `nginx:alpine`.

### 2. Kubernetes (`/k8s`)
*   **k3s** — легковесный кластер на VPS (Ubuntu 24.04).
*   **Deployment**: 2 реплики приложения.
*   **Service**: Внутренний сетевой доступ.
*   **Ingress (Traefik)**: Маршрутизация по домену `das-devops.site`.
*   **Cert-manager**: Автоматический SSL от Let's Encrypt.

### 3. Terraform (`/terraform`)
*   *В разработке:* Автоматизация создания VPS и настройки инфраструктуры.

## 🚀 CI/CD
Настроен пайплайн на базе GitLab CI:
1.  **Build**: Сборка Docker-образа из папки `app/` и пуш в Docker Hub с тегом коммита.
2.  **Deploy**: Подключение к VPS по SSH и обновление образа в k3s через `kubectl set image`.

## 📦 Как запустить локально
```bash
cd app
docker build -t my-portfolio .
docker run -d -p 8080:80 my-portfolio
