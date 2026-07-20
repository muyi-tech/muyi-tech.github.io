import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as i}from"./app-xD7n7cHq.js";const l={};function d(p,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="claude-code-cli-入门-init、-claude-目录与-claudeignore-配置指南" tabindex="-1"><a class="header-anchor" href="#claude-code-cli-入门-init、-claude-目录与-claudeignore-配置指南"><span>Claude Code CLI 入门：/init、.claude 目录与 .claudeignore 配置指南</span></a></h1><p>Claude Code CLI 是 Anthropic 推出的 AI 编码助手，直接在终端中工作。使用前，理解 <code>/init</code> 命令、<code>.claude</code> 目录结构和 <code>.claudeignore</code> 配置是基本功。</p><h2 id="一、-init-命令" tabindex="-1"><a class="header-anchor" href="#一、-init-命令"><span>一、<code>/init</code> 命令</span></a></h2><p><code>/init</code> 是 Claude Code 的交互式命令，用于自动扫描整个项目并生成 <code>CLAUDE.md</code>。</p><h3 id="当前限制" tabindex="-1"><a class="header-anchor" href="#当前限制"><span>当前限制</span></a></h3><p><code>/init</code> <strong>不支持指定输出目录</strong>。它默认生成在两个位置之一：</p><ol><li><strong>项目根目录</strong> → <code>./CLAUDE.md</code></li><li><strong><code>.claude/</code> 目录</strong> → <code>./.claude/CLAUDE.md</code></li></ol><h3 id="想放-claude-目录下怎么办" tabindex="-1"><a class="header-anchor" href="#想放-claude-目录下怎么办"><span>想放 <code>.claude</code> 目录下怎么办？</span></a></h3><p>手动创建即可。<code>/init</code> 扫描完项目后，把生成的 <code>CLAUDE.md</code> 内容复制到 <code>.claude/CLAUDE.md</code> 里，两处都生效，但 <strong><code>.claude/</code> 下的优先级更高</strong>。</p><h2 id="二、-claude-目录结构" tabindex="-1"><a class="header-anchor" href="#二、-claude-目录结构"><span>二、<code>.claude</code> 目录结构</span></a></h2><h3 id="两个目录-不是同一个" tabindex="-1"><a class="header-anchor" href="#两个目录-不是同一个"><span>两个目录，不是同一个</span></a></h3><table><thead><tr><th>层级</th><th>路径</th><th>用途</th><th>提交</th></tr></thead><tbody><tr><td>项目级</td><td><code>.claude/</code></td><td>团队共享配置</td><td>提交到 Git</td></tr><tr><td>全局</td><td><code>~/.claude/</code></td><td>个人偏好、会话历史、自动记忆</td><td>不提交</td></tr></tbody></table><h3 id="完整目录结构" tabindex="-1"><a class="header-anchor" href="#完整目录结构"><span>完整目录结构</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>your-project/</span></span>
<span class="line"><span>├── CLAUDE.md                        # 项目指令（提交）</span></span>
<span class="line"><span>├── CLAUDE.local.md                  # 个人覆盖（被 gitignore）</span></span>
<span class="line"><span>└── .claude/</span></span>
<span class="line"><span>    ├── settings.json                # 权限 + 配置（提交）</span></span>
<span class="line"><span>    ├── settings.local.json          # 个人权限覆盖（被 gitignore）</span></span>
<span class="line"><span>    ├── .mcp.json                    # MCP 服务器配置</span></span>
<span class="line"><span>    ├── rules/                       # 模块化指令文件</span></span>
<span class="line"><span>    │   ├── code-style.md</span></span>
<span class="line"><span>    │   ├── testing.md</span></span>
<span class="line"><span>    │   └── api-conventions.md</span></span>
<span class="line"><span>    ├── commands/                    # 自定义斜杠命令</span></span>
<span class="line"><span>    │   ├── review.md                # 成为 /project:review</span></span>
<span class="line"><span>    │   └── fix-issue.md             # 成为 /project:fix-issue</span></span>
<span class="line"><span>    ├── skills/                      # 自动触发的工作流</span></span>
<span class="line"><span>    │   └── deploy/</span></span>
<span class="line"><span>    │       ├── SKILL.md</span></span>
<span class="line"><span>    │       └── deploy-config.md</span></span>
<span class="line"><span>    ├── agents/                      # 专用子代理</span></span>
<span class="line"><span>    │   ├── code-reviewer.md</span></span>
<span class="line"><span>    │   └── security-auditor.md</span></span>
<span class="line"><span>    └── hooks/                       # 事件驱动自动化脚本</span></span>
<span class="line"><span>        └── validate-bash.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>~/.claude/</span></span>
<span class="line"><span>├── CLAUDE.md                        # 全局指令（所有项目）</span></span>
<span class="line"><span>├── settings.json                    # 全局权限</span></span>
<span class="line"><span>├── commands/                        # 个人命令（/user:cmd-name）</span></span>
<span class="line"><span>├── skills/                          # 个人技能</span></span>
<span class="line"><span>├── agents/                          # 个人代理</span></span>
<span class="line"><span>└── projects/                        # 会话历史 + 自动记忆</span></span>
<span class="line"><span>    └── project-hash/</span></span>
<span class="line"><span>        └── memory/</span></span>
<span class="line"><span>            └── MEMORY.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="claude-md-加载优先级" tabindex="-1"><a class="header-anchor" href="#claude-md-加载优先级"><span><a href="http://CLAUDE.md" target="_blank" rel="noopener noreferrer">CLAUDE.md</a> 加载优先级</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>最高  CLAUDE.local.md（项目根目录，个人覆盖，被 gitignore）</span></span>
<span class="line"><span>  ↑   CLAUDE.md（项目根目录或 .claude/，团队指令，提交到 Git）</span></span>
<span class="line"><span>  ↑   ~/.claude/CLAUDE.md（全局偏好，所有项目生效）</span></span>
<span class="line"><span>最低  组织策略（IT 部署，不可覆盖）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有层合并 → Claude 看到的是一个完整的系统提示。</p><h2 id="三、-claudeignore-配置规则" tabindex="-1"><a class="header-anchor" href="#三、-claudeignore-配置规则"><span>三、<code>.claudeignore</code> 配置规则</span></a></h2><h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么</span></a></h3><p><code>.claudeignore</code> 放在项目根目录，<strong>告诉 Claude 在构建上下文时跳过哪些文件/目录</strong>，语法与 <code>.gitignore</code> 完全一致。</p><h3 id="核心作用" tabindex="-1"><a class="header-anchor" href="#核心作用"><span>核心作用</span></a></h3><table><thead><tr><th>作用</th><th>说明</th></tr></thead><tbody><tr><td><strong>节省上下文 Token</strong></td><td>排除大文件、构建产物，避免浪费</td></tr><tr><td><strong>防止干扰</strong></td><td>排除 WIP 文档、废弃代码，避免 Claude 误读</td></tr><tr><td><strong>保护敏感文件</strong></td><td>排除 <code>.env</code>、密钥文件等</td></tr></tbody></table><h3 id="重要警告" tabindex="-1"><a class="header-anchor" href="#重要警告"><span>重要警告</span></a></h3><p><strong>.claudeignore 不是安全机制！</strong> 它只是一个<strong>上下文过滤器</strong>。如果用户明确要求 Claude 读取某个被 ignore 的文件，它仍能通过 <code>Read</code> 工具读到。<strong>保护敏感信息请用 <code>settings.json</code> 的 <code>deny</code> 规则，而不是 <code>.claudeignore</code>。</strong></p><h3 id="语法-同-gitignore" tabindex="-1"><a class="header-anchor" href="#语法-同-gitignore"><span>语法（同 <code>.gitignore</code>）</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># 单行注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定文件</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>secrets.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略目录</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通配符</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>*.tmp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略嵌套目录</span></span>
<span class="line"><span>**/__pycache__/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定扩展名</span></span>
<span class="line"><span>*.zip</span></span>
<span class="line"><span>*.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推荐-claudeignore" tabindex="-1"><a class="header-anchor" href="#推荐-claudeignore"><span>推荐 <code>.claudeignore</code></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># 构建产物</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>target/</span></span>
<span class="line"><span>out/</span></span>
<span class="line"><span>.next/</span></span>
<span class="line"><span>.nuxt/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 包管理锁文件（内容太大，无关上下文）</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>yarn.lock</span></span>
<span class="line"><span>pnpm-lock.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 大文件</span></span>
<span class="line"><span>*.zip</span></span>
<span class="line"><span>*.tar.gz</span></span>
<span class="line"><span>*.pdf</span></span>
<span class="line"><span>*.mp4</span></span>
<span class="line"><span>*.svgz</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>logs/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 临时文件</span></span>
<span class="line"><span>*.tmp</span></span>
<span class="line"><span>*.swp</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>Thumbs.db</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 敏感文件（但更推荐在 settings.json 的 deny 里也加上）</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>.env.*</span></span>
<span class="line"><span>!env.example</span></span>
<span class="line"><span>secrets/</span></span>
<span class="line"><span>credentials/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="claudeignore-vs-settings-json-deny" tabindex="-1"><a class="header-anchor" href="#claudeignore-vs-settings-json-deny"><span><code>.claudeignore</code> vs <code>settings.json deny</code></span></a></h3><table><thead><tr><th>机制</th><th>作用</th><th>安全性</th></tr></thead><tbody><tr><td><code>.claudeignore</code></td><td>上下文过滤，不阻止显式读取</td><td>❌ 低</td></tr><tr><td><code>settings.json deny</code></td><td>真正阻止工具调用</td><td>✅ 高</td></tr></tbody></table><h3 id="推荐组合配置" tabindex="-1"><a class="header-anchor" href="#推荐组合配置"><span>推荐组合配置</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-json"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// .claude/settings.json</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;permissions&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;deny&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;Read(.env)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;Read(.env.*)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;Read(./secrets/**)&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.claudeignore</code> 排除上下文噪音，<code>settings.json deny</code> 锁死安全边界，两者配合使用效果最佳。</p><h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结"><span>四、总结</span></a></h2><ul><li><code>/init</code> 不能指定输出目录，手动放 <code>.claude/</code> 下即可</li><li><code>.claude/</code> 目录是 Claude Code 的配置中心，从 <a href="http://CLAUDE.md" target="_blank" rel="noopener noreferrer">CLAUDE.md</a> 到 hooks 一应俱全</li><li><code>.claudeignore</code> 语法同 <code>.gitignore</code>，用来省 Token 和防干扰</li><li><strong>别用 <code>.claudeignore</code> 来保护敏感信息</strong>，那是 <code>settings.json</code> 的事</li></ul>`,35)])])}const r=n(l,[["render",d]]),o=JSON.parse('{"path":"/pages/fd58ab/","title":"Claude Code CLI 入门：/init、.claude 目录与 .claudeignore 配置指南","lang":"zh-CN","frontmatter":{"title":"Claude Code CLI 入门：/init、.claude 目录与 .claudeignore 配置指南","date":"2026-07-20T00:00:00.000Z","order":3,"categories":["claudecode"],"tags":["claudecode","cli","配置"],"permalink":"/pages/fd58ab/","contributors":false,"lastUpdated":false,"description":"Claude Code CLI 入门：/init、.claude 目录与 .claudeignore 配置指南 Claude Code CLI 是 Anthropic 推出的 AI 编码助手，直接在终端中工作。使用前，理解 /init 命令、.claude 目录结构和 .claudeignore 配置是基本功。 一、/init 命令 /init 是 C...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Claude Code CLI 入门：/init、.claude 目录与 .claudeignore 配置指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-07-20T00:00:00.000Z\\",\\"dateModified\\":\\"2026-07-20T02:28:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Keep Simple\\",\\"url\\":\\"https://muyi-tech.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://muyi-tech.github.io/pages/fd58ab/"}],["meta",{"property":"og:site_name","content":"Keep Simple"}],["meta",{"property":"og:title","content":"Claude Code CLI 入门：/init、.claude 目录与 .claudeignore 配置指南"}],["meta",{"property":"og:description","content":"Claude Code CLI 入门：/init、.claude 目录与 .claudeignore 配置指南 Claude Code CLI 是 Anthropic 推出的 AI 编码助手，直接在终端中工作。使用前，理解 /init 命令、.claude 目录结构和 .claudeignore 配置是基本功。 一、/init 命令 /init 是 C..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-07-20T02:28:24.000Z"}],["meta",{"property":"article:tag","content":"配置"}],["meta",{"property":"article:tag","content":"cli"}],["meta",{"property":"article:tag","content":"claudecode"}],["meta",{"property":"article:published_time","content":"2026-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-07-20T02:28:24.000Z"}]]},"git":{"createdTime":1784514504000,"updatedTime":1784514504000},"readingTime":{"minutes":3.11,"words":934},"filePathRelative":"01.ai/06.claudecode/03-Claude-Code-CLI-入门配置指南.md","excerpt":"\\n<p>Claude Code CLI 是 Anthropic 推出的 AI 编码助手，直接在终端中工作。使用前，理解 <code>/init</code> 命令、<code>.claude</code> 目录结构和 <code>.claudeignore</code> 配置是基本功。</p>\\n<h2>一、<code>/init</code> 命令</h2>\\n<p><code>/init</code> 是 Claude Code 的交互式命令，用于自动扫描整个项目并生成 <code>CLAUDE.md</code>。</p>\\n<h3>当前限制</h3>\\n<p><code>/init</code> <strong>不支持指定输出目录</strong>。它默认生成在两个位置之一：</p>","autoDesc":true}');export{r as comp,o as data};
