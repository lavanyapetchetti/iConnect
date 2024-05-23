# Running Tests On Your Laptop

## Prerequisites
If you are setting up a brand new laptop, you will need to configure the following items, which are required for most projects at Hootsuite.

- A version of bash >= v4
- [Setup your github SSH keys](https://docs.github.com/en/enterprise-server@3.3/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Homebrew package manager](https://brew.sh/)
- [Install hs-opskit](https://hootsuite.atlassian.net/wiki/spaces/POD/pages/898785/OpsKit+Help+Page)
- [Setup credentials for Artifactory](https://hootsuite.atlassian.net/wiki/spaces/POD/pages/899658/Artifactory+Home)
- yarn & node 16 or higher (or use nvm)

## Installation
If you have already completed the preceding setup (for example, for another Hootsuite project), you will only need to

```
git clone https://github.com/lavanyapetchetti/iConnect.git
cd iConnect
make install
```
