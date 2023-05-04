| Symbol    | Meaning                                                              | Source                                                 |
| --------- | -------------------------------------------------------------------- | ------------------------------------------------------ |
| `feature` | current branch; replaced with `#tag` or `@commit` if not on a branch | `git status --ignore-submodules=dirty`                 |
| `master`  | remote tracking branch; only shown if different from local branch    | `git rev-parse --abbrev-ref --symbolic-full-name @{u}` |
| `⇣42`     | this many commits behind the remote                                  | `git status --ignore-submodules=dirty`                 |
| `⇡42`     | this many commits ahead of the remote                                | `git status --ignore-submodules=dirty`                 |
| `⇠42`     | this many commits behind the push remote                             | `git rev-list --left-right --count HEAD...@{push}`     |
| `⇢42`     | this many commits ahead of the push remote                           | `git rev-list --left-right --count HEAD...@{push}`     |
| `*42`     | this many stashes                                                    | `git stash list`                                       |
| `merge`   | repository state                                                     | `git status --ignore-submodules=dirty`                 |
| `~42`     | this many merge conflicts                                            | `git status --ignore-submodules=dirty`                 |
| `+42`     | this many staged changes                                             | `git status --ignore-submodules=dirty`                 |
| `!42`     | this many unstaged changes                                           | `git status --ignore-submodules=dirty`                 |
| `?42`     | this many untracked files                                            | `git status --ignore-submodules=dirty`                 |
| `─`       | the number of staged, unstaged or untracked files is unknown

KEY in production: KEY Variable -> Use a Key Management Service -> Monitor your token usage and rotate your keys when needed
