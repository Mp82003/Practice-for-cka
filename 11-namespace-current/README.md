# Q11 – Set Namespace as Current Context Default

## Objective

Configure the current Kubernetes context so that commands without an explicit `-n` option use `dev-environment` as the default namespace.

After verification, restore the default namespace to `default`.

## Requirements

- Inspect the current context name.
- Update the namespace field of the current context.
- Do not create a new context.
- Run a namespace-scoped command without using `-n`.
- Confirm that the command queries `dev-environment`.
- Restore the current context's namespace to `default`.

## Commands Used

### 1. Check Current Context

```bash
kubectl config current-context
```

**Output:**

```text
minikube
```

### 2. Set Default Namespace to dev-environment

```bash
kubectl config set-context --current --namespace=dev-environment
```

**Output:**

```text
Context "minikube" modified.
```

### 3. List Pods Without Specifying Namespace

```bash
kubectl get pods
```

**Output:**

```text
NAME        READY   STATUS    RESTARTS
dev-nginx   1/1     Running   2
```

The command displayed Pods from the `dev-environment` namespace without using the `-n` option.

### 4. Verify Current Context Configuration

```bash
kubectl config view --minify
```

Verified configuration:

```yaml
contexts:
- context:
    cluster: minikube
    namespace: dev-environment
    user: minikube
  name: minikube

current-context: minikube
```

### 5. Restore Default Namespace

```bash
kubectl config set-context --current --namespace=default
```

### 6. Verify Restored Namespace

```bash
kubectl config view --minify
```

Expected configuration:

```yaml
namespace: default
```

## Key Concepts Learned

**Kubernetes Context:** A configuration profile that specifies the cluster, user credentials, and default namespace used by kubectl.

**Current Context:** The context currently selected and actively used by kubectl.

**Default Namespace:** The namespace used automatically when a command does not explicitly specify `-n`.

**Kubeconfig:** The configuration file that stores cluster, user, context, and current-context information.

## Important Commands

| Command | Purpose |
|---|---|
| `kubectl config current-context` | Display current context |
| `kubectl config get-contexts` | List available contexts |
| `kubectl config set-context --current
