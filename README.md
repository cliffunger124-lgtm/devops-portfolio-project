# DevOps Portfolio Project

Полный цикл разработки и развертывания веб-приложения: от кода до production-инфраструктуры в Kubernetes.

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
Настроен пайплайн:
`git push` → сборка Docker-образа → пуш в Docker Hub → `kubectl set image` (деплой в k3s).

## 📦 Как запустить локально
```bash
cd app
docker build -t my-portfolio .
docker run -d -p 8080:80 my-portfolio
