# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: acceptance\stove-store.spec.ts >> Onstove Store >> TC-003: Verify search result count matches API total_elements
- Location: tests\acceptance\stove-store.spec.ts:42:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 96
Received: 97
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - generic [ref=e11]:
      - generic [ref=e16]:
        - button "" [ref=e19] [cursor=pointer]:
          - text: 
          - generic [ref=e21]: 
        - list [ref=e24]:
          - listitem [ref=e25]:
            - button "Store" [ref=e26] [cursor=pointer]:
              - generic [ref=e27]:
                - text: 
                - generic [ref=e29]: Store
          - listitem [ref=e30]:
            - button "Lounge" [ref=e31] [cursor=pointer]:
              - generic [ref=e32]:
                - text: 
                - generic [ref=e34]: Lounge
          - listitem [ref=e35]:
            - button "Event" [ref=e36] [cursor=pointer]:
              - generic [ref=e37]:
                - text: 
                - generic [ref=e39]: Event
        - generic [ref=e40]:
          - button " Install STOVE" [ref=e42] [cursor=pointer]:
            - generic [ref=e43]: 
            - generic [ref=e45]: Install STOVE
          - generic [ref=e46]:
            - button "" [ref=e50] [cursor=pointer]:
              - generic [ref=e51]: 
            - button "" [ref=e55] [cursor=pointer]:
              - generic [ref=e56]: 
            - generic [ref=e58]:
              - generic [ref=e59]:
                - button "Register" [ref=e60] [cursor=pointer]:
                  - generic [ref=e61]: Register
                - button "Log In" [ref=e62] [cursor=pointer]:
                  - generic [ref=e63]: Log In
              - text: 
      - generic [ref=e66]:
        - text: 
        - generic [ref=e68]:
          - generic [ref=e69]:
            - list [ref=e76]:
              - link "Recommended" [ref=e78] [cursor=pointer]:
                - /url: https://store.onstove.com/en/
                - generic [ref=e81]: Recommended
              - link "STOVE Pick" [ref=e83] [cursor=pointer]:
                - /url: https://store.onstove.com/en/store/stovepick
                - generic [ref=e86]: STOVE Pick
              - link "영문 영문" [ref=e88] [cursor=pointer]:
                - /url: https://store.onstove.com/en/store/2026_Game_Omakase
                - generic [ref=e89]:
                  - img "영문" [ref=e90]
                  - img "영문" [ref=e91]
              - link "Online Games" [ref=e93] [cursor=pointer]:
                - /url: https://store.onstove.com/en/store/freetoplus
                - generic [ref=e96]: Online Games
              - link "Brand Zone" [ref=e98] [cursor=pointer]:
                - /url: https://store.onstove.com/en/store/brandzone_new
                - generic [ref=e101]: Brand Zone
              - link "This Month’s Deals" [ref=e103] [cursor=pointer]:
                - /url: https://store.onstove.com/event
                - generic [ref=e106]: This Month’s Deals
              - link "Official Community" [ref=e108] [cursor=pointer]:
                - /url: https://page.onstove.com/quarter/
                - generic [ref=e111]: Official Community
              - link "STOVE INDIE" [ref=e113] [cursor=pointer]:
                - /url: https://store.onstove.com/en/store/stoveindie
                - generic [ref=e116]: STOVE INDIE
              - link "Ranking" [ref=e118] [cursor=pointer]:
                - /url: https://store.onstove.com/en/store/gameranking
                - generic [ref=e121]: Ranking
              - link "Studio" [ref=e123] [cursor=pointer]:
                - /url: https://studio.onstove.com
                - generic [ref=e126]: Studio
            - button "Category " [ref=e133] [cursor=pointer]:
              - generic [ref=e134]: Category
              - generic [ref=e136]: 
          - generic [ref=e138]:
            - link " Wishlist" [ref=e139] [cursor=pointer]:
              - /url: https://store.onstove.com/en/store/wishlist
              - generic [ref=e140]: 
              - generic [ref=e141]: Wishlist
            - link " Cart" [ref=e142] [cursor=pointer]:
              - /url: https://store.onstove.com/en/cart
              - generic [ref=e143]: 
              - generic [ref=e144]: Cart
        - generic [ref=e148]:
          - button "" [ref=e149] [cursor=pointer]:
            - generic [ref=e150]: 
          - text: 
          - textbox "Search" [ref=e154]
    - generic [ref=e162]:
      - heading "All Games" [level=3] [ref=e163]
      - generic [ref=e164]:
        - generic [ref=e165]:
          - generic [ref=e166]:
            - group "96 search result found" [ref=e167]:
              - generic [ref=e168]: Search Result
              - emphasis [ref=e169]: "96"
              - status [ref=e170]: 96 search result found
            - generic [ref=e171]:
              - generic [ref=e172]:
                - button " 도움말" [ref=e173] [cursor=pointer]:
                  - generic [ref=e174]:
                    - text: 
                    - generic [ref=e175]: 도움말
                - listbox [ref=e176]:
                  - button "By Store Ranking " [ref=e178] [cursor=pointer]:
                    - generic [ref=e179]: By Store Ranking
                    - generic [ref=e180]: 
              - generic [ref=e181]:
                - button " 카드형" [ref=e183] [cursor=pointer]:
                  - generic [ref=e184]:
                    - text: 
                    - generic [ref=e185]: 카드형
                - text: 
          - generic [ref=e188]:
            - button " Reset All" [ref=e189] [cursor=pointer]:
              - generic [ref=e190]: 
              - generic [ref=e191]: Reset All
            - button "action " [ref=e192] [cursor=pointer]:
              - generic [ref=e193]: action
              - generic [ref=e194]: 
            - button "Base Game " [ref=e195] [cursor=pointer]:
              - generic [ref=e196]: Base Game
              - generic [ref=e197]: 
            - button "RPG " [ref=e198] [cursor=pointer]:
              - generic [ref=e199]: RPG
              - generic [ref=e200]: 
          - list [ref=e201]:
            - listitem [ref=e202]:
              - generic [ref=e203]:
                - 'img "Lunaraxia: Magpie Sings of the World''s End" [ref=e206]'
                - generic [ref=e207]:
                  - generic [ref=e208]:
                    - 'heading "Product Lunaraxia: Magpie Sings of the World''s End" [level=3] [ref=e209]':
                      - generic [ref=e210]: Product
                      - text: "Lunaraxia: Magpie Sings of the World's End"
                    - paragraph [ref=e211]:
                      - generic [ref=e212]: Description
                      - text: Parry your way through Soulslike combat, where each attack is intuitively telegraphed and meticulously timed with hand-drawn sprites. Discover your own broken synergies and uncover the secrets of the eternal ataraxia the Moon promi-GAZE THE MOON. SHED THE FLESH. ASCEND THE SPIRE. AND TRANSCEND.
                    - generic [ref=e213]:
                      - generic [ref=e214]: Category
                      - text: Action RPG
                    - generic [ref=e215]:
                      - generic [ref=e216]: Review 0
                      - generic [ref=e217]: Recommended 0
                  - paragraph [ref=e220]:
                    - generic [ref=e221]: Availability
                    - text: To be released
                - 'link "Product Lunaraxia: Magpie Sings of the World''s End" [ref=e222] [cursor=pointer]':
                  - /url: /en/games/101767
            - listitem [ref=e223]:
              - generic [ref=e224]:
                - img "Wilva" [ref=e227]
                - generic [ref=e228]:
                  - generic [ref=e229]:
                    - heading "Product Wilva" [level=3] [ref=e230]:
                      - generic [ref=e231]: Product
                      - text: Wilva
                    - paragraph [ref=e232]:
                      - generic [ref=e233]: Description
                      - text: Wilba is a side-scrolling action platformer game influenced by classic action RPG games.
                    - generic [ref=e234]:
                      - generic [ref=e235]: Category
                      - text: Action RPG Platformer
                    - generic [ref=e236]:
                      - generic [ref=e237]: Review 0
                      - generic [ref=e238]: Recommended 0
                  - paragraph [ref=e241]:
                    - generic [ref=e242]: Price
                    - text: S$3.86
                - link "Product Wilva" [ref=e243] [cursor=pointer]:
                  - /url: /en/games/102341
            - listitem [ref=e244]:
              - generic [ref=e245]:
                - 'img "Knights of Messiah IF: Castle in an Alternate Dimension" [ref=e248]'
                - generic [ref=e249]:
                  - generic [ref=e250]:
                    - 'heading "Product Knights of Messiah IF: Castle in an Alternate Dimension" [level=3] [ref=e251]':
                      - generic [ref=e252]: Product
                      - text: "Knights of Messiah IF: Castle in an Alternate Dimension"
                    - paragraph [ref=e253]:
                      - generic [ref=e254]: Description
                      - text: Dark Fantasy! Mature themes! A story filled with hope!
                    - generic [ref=e255]:
                      - generic [ref=e256]: Category
                      - text: RPG Action Adventure
                    - generic [ref=e257]:
                      - generic [ref=e258]: Review 0
                      - generic [ref=e259]: Recommended 0
                  - paragraph [ref=e262]:
                    - generic [ref=e263]: Price
                    - text: S$16.78
                - 'link "Product Knights of Messiah IF: Castle in an Alternate Dimension" [ref=e264] [cursor=pointer]':
                  - /url: /en/games/102866
            - listitem [ref=e265]:
              - generic [ref=e266]:
                - img "Berserk High" [ref=e269]
                - generic [ref=e270]:
                  - generic [ref=e271]:
                    - heading "Product Berserk High" [level=3] [ref=e272]:
                      - generic [ref=e273]: Product
                      - text: Berserk High
                    - paragraph [ref=e274]:
                      - generic [ref=e275]: Description
                      - text: Berserk High is an action RPG in which you defeat numerous enemies with a combination of various skills. The footsteps of the enigmatic wanderer Bella lead to the Furnace of Chaos, where 12 great heroes are confined.
                    - generic [ref=e276]:
                      - generic [ref=e277]: Category
                      - text: Action RPG Adventure
                    - generic [ref=e278]:
                      - generic [ref=e279]: Review 0
                      - generic [ref=e280]: Recommended 0
                  - paragraph [ref=e283]:
                    - generic [ref=e284]: Price
                    - text: S$6.44
                - link "Product Berserk High" [ref=e285] [cursor=pointer]:
                  - /url: /en/games/4715
            - listitem [ref=e286]:
              - generic [ref=e287]:
                - img "Neon Abyss 2" [ref=e290]
                - generic [ref=e291]:
                  - generic [ref=e292]:
                    - heading "Product Neon Abyss 2" [level=3] [ref=e293]:
                      - generic [ref=e294]: Product
                      - text: Neon Abyss 2
                    - paragraph [ref=e295]:
                      - generic [ref=e296]: Description
                      - text: Dive into the cybermyth roguelike chaos of Neon Abyss 2! Now featuring up to 4-player online co-op, more combat styles, and unlimited item synergies, every run delivers a dramatic, action-packed experience you won't forget.
                    - generic [ref=e297]:
                      - generic [ref=e298]: Category
                      - text: Action RPG Shooting
                    - generic [ref=e299]:
                      - generic [ref=e300]: Review 0
                      - generic [ref=e301]: Recommended 0
                  - paragraph [ref=e304]:
                    - generic [ref=e305]: Availability
                    - text: To be released
                - link "Product Neon Abyss 2" [ref=e306] [cursor=pointer]:
                  - /url: /en/games/101851
            - listitem [ref=e307]:
              - generic [ref=e308]:
                - img "Gray Paradise - Secret Garden" [ref=e311]
                - generic [ref=e312]:
                  - generic [ref=e313]:
                    - heading "Product Gray Paradise - Secret Garden" [level=3] [ref=e314]:
                      - generic [ref=e315]: Product
                      - text: Gray Paradise - Secret Garden
                    - paragraph [ref=e316]:
                      - generic [ref=e317]: Description
                      - text: 미소녀 액션 RPG <회색낙원 - 시크릿가든>은 던전을 탐험하고 소녀들과 만나고 악몽의 진실을 파헤치는 게임입니다. 다양한 상호작용 대사와 컷씬이 준비되어 있습니다.
                    - generic [ref=e318]:
                      - generic [ref=e319]: Category
                      - text: RPG Action Visual Novel
                    - generic [ref=e320]:
                      - generic [ref=e321]: Review 35
                      - generic [ref=e322]: Recommended 26
                  - paragraph [ref=e325]:
                    - generic [ref=e326]: Price
                    - text: S$28.41
                - link "Product Gray Paradise - Secret Garden" [ref=e327] [cursor=pointer]:
                  - /url: /en/games/4561
            - listitem [ref=e328]:
              - generic [ref=e329]:
                - img "Godrop" [ref=e332]
                - generic [ref=e333]:
                  - generic [ref=e334]:
                    - heading "Product Godrop" [level=3] [ref=e335]:
                      - generic [ref=e336]: Product
                      - text: Godrop
                    - paragraph [ref=e337]:
                      - generic [ref=e338]: Description
                      - text: Control the 'Droplet' spacecraft and destroy human civilization!
                    - generic [ref=e339]:
                      - generic [ref=e340]: Category
                      - text: Action RPG Visual Novel
                    - generic [ref=e341]:
                      - generic [ref=e342]: Review 7
                      - generic [ref=e343]: Recommended 8
                  - paragraph [ref=e346]:
                    - generic [ref=e347]: Price
                    - text: S$11.61
                - link "Product Godrop" [ref=e348] [cursor=pointer]:
                  - /url: /en/games/4076
            - listitem [ref=e349]:
              - generic [ref=e350]:
                - img "Project Dorothy (Early Access)" [ref=e353]
                - generic [ref=e354]:
                  - generic [ref=e355]:
                    - heading "Product Project Dorothy (Early Access)" [level=3] [ref=e356]:
                      - generic [ref=e357]: Product
                      - text: Project Dorothy (Early Access)
                    - paragraph [ref=e358]:
                      - generic [ref=e359]: Description
                      - text: Project Dorothy is in Early Access.
                    - generic [ref=e360]:
                      - generic [ref=e361]: Category
                      - text: Action RPG Shooting
                    - generic [ref=e362]:
                      - generic [ref=e363]: Review 1
                      - generic [ref=e364]: Recommended 0
                  - paragraph [ref=e367]:
                    - generic [ref=e368]: Status
                    - text: Usage Limited
                - link "Product Project Dorothy (Early Access)" [ref=e369] [cursor=pointer]:
                  - /url: /en/games/5097
            - listitem [ref=e370]:
              - generic [ref=e371]:
                - img "NecromancerRPG" [ref=e374]
                - generic [ref=e375]:
                  - generic [ref=e376]:
                    - heading "Product NecromancerRPG" [level=3] [ref=e377]:
                      - generic [ref=e378]: Product
                      - text: NecromancerRPG
                    - paragraph [ref=e379]:
                      - generic [ref=e380]: Description
                      - text: "NecromancerRPG: 45+ summons, upgrades, strategy, items, elementals. Download now"
                    - generic [ref=e381]:
                      - generic [ref=e382]: Category
                      - text: RPG Action Adventure
                    - generic [ref=e383]:
                      - generic [ref=e384]: Review 0
                      - generic [ref=e385]: Recommended 0
                  - paragraph [ref=e388]:
                    - generic [ref=e389]: Availability
                    - text: To be released
                - link "Product NecromancerRPG" [ref=e390] [cursor=pointer]:
                  - /url: /en/games/2055
            - listitem [ref=e391]:
              - generic [ref=e392]:
                - img "Starward" [ref=e395]
                - generic [ref=e396]:
                  - generic [ref=e397]:
                    - heading "Product Starward" [level=3] [ref=e398]:
                      - generic [ref=e399]: Product
                      - text: Starward
                    - paragraph [ref=e400]:
                      - generic [ref=e401]: Description
                      - text: Starward is a 3D fighting game that integrates mecha girls and classic GVG combat gameplay, with 1V1 and 2V2 mode as the core gameplay. In Starward, players can control mecha girls with distinct personalities and different combat styles, and experience three-dimensional combat experiences beyond the ground.
                    - generic [ref=e402]:
                      - generic [ref=e403]: Category
                      - text: Action RPG Strategy
                    - generic [ref=e404]:
                      - generic [ref=e405]: Review 0
                      - generic [ref=e406]: Recommended 0
                  - paragraph [ref=e409]:
                    - generic [ref=e410]: Availability
                    - text: To be released
                - link "Product Starward" [ref=e411] [cursor=pointer]:
                  - /url: /en/games/100604
            - listitem [ref=e412]:
              - generic [ref=e413]:
                - img "The Vagrant" [ref=e416]
                - generic [ref=e417]:
                  - generic [ref=e418]:
                    - heading "Product The Vagrant" [level=3] [ref=e419]:
                      - generic [ref=e420]: Product
                      - text: The Vagrant
                    - paragraph [ref=e421]:
                      - generic [ref=e422]: Description
                      - text: Immerse yourself into a gorgeous hand-painted fantasy world and experience an exciting and challenging adventure.
                    - generic [ref=e423]:
                      - generic [ref=e424]: Category
                      - text: RPG
                    - generic [ref=e425]:
                      - generic [ref=e426]: Review 14
                      - generic [ref=e427]: Recommended 7
                  - paragraph [ref=e430]:
                    - generic [ref=e431]: Price
                    - text: S$5.15
                - link "Product The Vagrant" [ref=e432] [cursor=pointer]:
                  - /url: /en/games/1722
            - listitem [ref=e433]:
              - generic [ref=e434]:
                - img "WrestleQuest" [ref=e437]
                - generic [ref=e438]:
                  - generic [ref=e439]:
                    - heading "Product WrestleQuest" [level=3] [ref=e440]:
                      - generic [ref=e441]: Product
                      - text: WrestleQuest
                    - paragraph [ref=e442]:
                      - generic [ref=e443]: Description
                      - text: "'Macho Man' Randy Savage and tons of other icons offer guidance as you powerbomb your way to glory beyond the ring. This hero’s journey ain’t just an epic quest, it’s WRESTLEQUEST!"
                    - generic [ref=e444]:
                      - generic [ref=e445]: Category
                      - text: RPG
                    - generic [ref=e446]:
                      - generic [ref=e447]: Review 2
                      - generic [ref=e448]: Recommended 2
                  - paragraph [ref=e451]:
                    - generic [ref=e452]: Price
                    - text: S$38.74
                - link "Product WrestleQuest" [ref=e453] [cursor=pointer]:
                  - /url: /en/games/3471
            - listitem [ref=e454]:
              - generic [ref=e455]:
                - img "Sands of Salzaar" [ref=e458]
                - generic [ref=e459]:
                  - generic [ref=e460]:
                    - heading "Product Sands of Salzaar" [level=3] [ref=e461]:
                      - generic [ref=e462]: Product
                      - text: Sands of Salzaar
                    - paragraph [ref=e463]:
                      - generic [ref=e464]: Description
                      - text: Bringing you to an exotic desert where you’ll recruit, train, and guide your troops into battle against rival cities and factions.
                    - generic [ref=e465]:
                      - generic [ref=e466]: Category
                      - text: RPG Adventure Strategy
                    - generic [ref=e467]:
                      - generic [ref=e468]: Review 130
                      - generic [ref=e469]: Recommended 69
                  - generic [ref=e470]:
                    - generic [ref=e471]: "-50%"
                    - generic [ref=e472]:
                      - paragraph [ref=e473]: S$19.36
                      - paragraph [ref=e474]:
                        - generic [ref=e475]: Price
                        - text: S$9.67
                - link "Product Sands of Salzaar" [ref=e476] [cursor=pointer]:
                  - /url: /en/games/3959
            - listitem [ref=e477]:
              - generic [ref=e478]:
                - img "CosmoPirates" [ref=e481]
                - generic [ref=e482]:
                  - generic [ref=e483]:
                    - heading "Product CosmoPirates" [level=3] [ref=e484]:
                      - generic [ref=e485]: Product
                      - text: CosmoPirates
                    - paragraph [ref=e486]:
                      - generic [ref=e487]: Description
                      - text: Build your deck using cards, ships, items and crew! Explore a generated galaxy roguelike style. Fight gruesome battles against the medley of space scum!
                    - generic [ref=e488]:
                      - generic [ref=e489]: Category
                      - text: RPG Adventure Strategy
                    - generic [ref=e490]:
                      - generic [ref=e491]: Review 0
                      - generic [ref=e492]: Recommended 1
                  - paragraph [ref=e495]:
                    - generic [ref=e496]: Price
                    - text: S$15.48
                - link "Product CosmoPirates" [ref=e497] [cursor=pointer]:
                  - /url: /en/games/3822
            - listitem [ref=e498]:
              - generic [ref=e499]:
                - img "Lamp Chronicle" [ref=e502]
                - generic [ref=e503]:
                  - generic [ref=e504]:
                    - heading "Product Lamp Chronicle" [level=3] [ref=e505]:
                      - generic [ref=e506]: Product
                      - text: Lamp Chronicle
                    - paragraph [ref=e507]:
                      - generic [ref=e508]: Description
                      - text: Lamp Chronicle is a 2D platformer game that tells the story of a little hero who travels to save a kingdom in crisis. Defeat enemies against beautiful backgrounds and enjoy exciting battles with bosses.
                    - generic [ref=e509]:
                      - generic [ref=e510]: Category
                      - text: RPG
                    - generic [ref=e511]:
                      - generic [ref=e512]: Review 1
                      - generic [ref=e513]: Recommended 3
                  - paragraph [ref=e516]:
                    - generic [ref=e517]: Price
                    - text: S$15.48
                - link "Product Lamp Chronicle" [ref=e518] [cursor=pointer]:
                  - /url: /en/games/421
            - listitem [ref=e519]:
              - generic [ref=e520]:
                - img "God Of Weapons" [ref=e523]
                - generic [ref=e524]:
                  - generic [ref=e525]:
                    - heading "Product God Of Weapons" [level=3] [ref=e526]:
                      - generic [ref=e527]: Product
                      - text: God Of Weapons
                    - paragraph [ref=e528]:
                      - generic [ref=e529]: Description
                      - text: Immerse yourself in the adrenaline-fueled realm of God of Weapons, a dynamic bullet-hell experience intertwined with captivating inventory management.
                    - generic [ref=e530]:
                      - generic [ref=e531]: Category
                      - text: RPG
                    - generic [ref=e532]:
                      - generic [ref=e533]: Review 380
                      - generic [ref=e534]: Recommended 251
                  - paragraph [ref=e537]:
                    - generic [ref=e538]: Price
                    - text: S$7.73
                - link "Product God Of Weapons" [ref=e539] [cursor=pointer]:
                  - /url: /en/games/2067
            - listitem [ref=e540]:
              - generic [ref=e541]:
                - 'img "Valefor: Roguelike Tactics" [ref=e544]'
                - generic [ref=e545]:
                  - generic [ref=e546]:
                    - 'heading "Product Valefor: Roguelike Tactics" [level=3] [ref=e547]':
                      - generic [ref=e548]: Product
                      - text: "Valefor: Roguelike Tactics"
                    - paragraph [ref=e549]:
                      - generic [ref=e550]: Description
                      - text: A Tactical Auto-Battler set in a Dark Fantasy world- complete with Roguelike Dungeons, a PVP Arena, Crafting and Kingdom Building.
                    - generic [ref=e551]:
                      - generic [ref=e552]: Category
                      - text: Strategy RPG Simulation
                    - generic [ref=e553]:
                      - generic [ref=e554]: Review 3
                      - generic [ref=e555]: Recommended 2
                  - paragraph [ref=e558]:
                    - generic [ref=e559]: Price
                    - text: S$16.79
                - 'link "Product Valefor: Roguelike Tactics" [ref=e560] [cursor=pointer]':
                  - /url: /en/games/4250
            - listitem [ref=e561]:
              - generic [ref=e562]:
                - 'img "Eclipse: The Last Survivors" [ref=e565]'
                - generic [ref=e566]:
                  - generic [ref=e567]:
                    - 'heading "Product Eclipse: The Last Survivors" [level=3] [ref=e568]':
                      - generic [ref=e569]: Product
                      - text: "Eclipse: The Last Survivors"
                    - paragraph [ref=e570]:
                      - generic [ref=e571]: Description
                      - text: By combining RPG elements with the 'Vampire Survivors-Like' genre, users can enjoy the fun of repeated play with various classes and each class' unique skills and special effects.
                    - generic [ref=e572]:
                      - generic [ref=e573]: Category
                      - text: Casual RPG Strategy
                    - generic [ref=e574]:
                      - generic [ref=e575]: Review 14
                      - generic [ref=e576]: Recommended 11
                  - generic [ref=e577]:
                    - generic [ref=e578]: "-40%"
                    - generic [ref=e579]:
                      - paragraph [ref=e580]: S$6.44
                      - paragraph [ref=e581]:
                        - generic [ref=e582]: Price
                        - text: S$3.86
                - 'link "Product Eclipse: The Last Survivors" [ref=e583] [cursor=pointer]':
                  - /url: /en/games/101625
            - listitem [ref=e584]:
              - generic [ref=e585]:
                - img "Flower Dungeon" [ref=e588]
                - generic [ref=e589]:
                  - generic [ref=e590]:
                    - heading "Product Flower Dungeon" [level=3] [ref=e591]:
                      - generic [ref=e592]: Product
                      - text: Flower Dungeon
                    - paragraph [ref=e593]:
                      - generic [ref=e594]: Description
                      - text: A pixel rogue-lite RPG where you grow and fight in unpredictable dungeons with beautiful heroes!
                    - generic [ref=e595]:
                      - generic [ref=e596]: Category
                      - text: RPG Adventure Simulation
                    - generic [ref=e597]:
                      - generic [ref=e598]: Review 39
                      - generic [ref=e599]: Recommended 31
                  - generic [ref=e600]:
                    - generic [ref=e601]: "-60%"
                    - generic [ref=e602]:
                      - paragraph [ref=e603]: S$10.32
                      - paragraph [ref=e604]:
                        - generic [ref=e605]: Price
                        - text: S$4.12
                - link "Product Flower Dungeon" [ref=e606] [cursor=pointer]:
                  - /url: /en/games/100595
            - listitem [ref=e607]:
              - generic [ref=e608]:
                - img "Arbor" [ref=e611]
                - generic [ref=e612]:
                  - generic [ref=e613]:
                    - heading "Product Arbor" [level=3] [ref=e614]:
                      - generic [ref=e615]: Product
                      - text: Arbor
                    - paragraph [ref=e616]:
                      - generic [ref=e617]: Description
                      - text: Become an pioneer, overcome crises and colonize the island.
                    - generic [ref=e618]:
                      - generic [ref=e619]: Category
                      - text: RPG Simulation
                    - generic [ref=e620]:
                      - generic [ref=e621]: Review 8
                      - generic [ref=e622]: Recommended 8
                  - paragraph [ref=e625]:
                    - generic [ref=e626]: Price
                    - text: S$5.16
                - link "Product Arbor" [ref=e627] [cursor=pointer]:
                  - /url: /en/games/3625
            - listitem [ref=e628]:
              - generic [ref=e629]:
                - img "Cattle Country" [ref=e632]
                - generic [ref=e633]:
                  - generic [ref=e634]:
                    - heading "Product Cattle Country" [level=3] [ref=e635]:
                      - generic [ref=e636]: Product
                      - text: Cattle Country
                    - paragraph [ref=e637]:
                      - generic [ref=e638]: Description
                      - text: Howdy partner! Welcome to Cattle Country, the Cozy Cowboy Adventure Life Sim. Become a determined pioneer traveling west to start a new life. Make a home in the mountains, take on bandits, discover dastardly plots, build a farm, develop your town, and make friends with fellow residents.
                    - generic [ref=e639]:
                      - generic [ref=e640]: Category
                      - text: Casual RPG Adventure
                    - generic [ref=e641]:
                      - generic [ref=e642]: Review 14
                      - generic [ref=e643]: Recommended 12
                  - paragraph [ref=e646]:
                    - generic [ref=e647]: Price
                    - text: S$24.53
                - link "Product Cattle Country" [ref=e648] [cursor=pointer]:
                  - /url: /en/games/101753
            - listitem [ref=e649]:
              - generic [ref=e650]:
                - img "Nightmare Scape" [ref=e653]
                - generic [ref=e654]:
                  - generic [ref=e655]:
                    - heading "Product Nightmare Scape" [level=3] [ref=e656]:
                      - generic [ref=e657]: Product
                      - text: Nightmare Scape
                    - paragraph [ref=e658]:
                      - generic [ref=e659]: Description
                      - text: Nightmare Scape (악몽의 여로) is a narrative-driven horror adventure game combining sneak action with diverse puzzles. It follows a young boy in search for the last hope of love who is working out his own salvation by navigating through his fear.
                    - generic [ref=e660]:
                      - generic [ref=e661]: Category
                      - text: Adventure RPG Horror
                    - generic [ref=e662]:
                      - generic [ref=e663]: Review 3
                      - generic [ref=e664]: Recommended 3
                  - paragraph [ref=e667]:
                    - generic [ref=e668]: Price
                    - text: S$25.82
                - link "Product Nightmare Scape" [ref=e669] [cursor=pointer]:
                  - /url: /en/games/4786
            - listitem [ref=e670]:
              - generic [ref=e671]:
                - img "IfSunSets" [ref=e674]
                - generic [ref=e675]:
                  - generic [ref=e676]:
                    - heading "Product IfSunSets" [level=3] [ref=e677]:
                      - generic [ref=e678]: Product
                      - text: IfSunSets
                    - paragraph [ref=e679]:
                      - generic [ref=e680]: Description
                      - text: IfSunSets is a survival RPG adventure game. During the day, you must secure supplies necessary for survival throughout the island, and at night, you must survive against strong and terrifying monsters tracking you. You can also build a base with the supplies you have secured to defend against the threatening monsters.
                    - generic [ref=e681]:
                      - generic [ref=e682]: Category
                      - text: RPG Adventure Defense
                    - generic [ref=e683]:
                      - generic [ref=e684]: Review 293
                      - generic [ref=e685]: Recommended 102
                  - paragraph [ref=e688]:
                    - generic [ref=e689]: Price
                    - text: S$25.60
                - link "Product IfSunSets" [ref=e690] [cursor=pointer]:
                  - /url: /en/games/2122
            - listitem [ref=e691]:
              - generic [ref=e692]:
                - img "ELYSIUM" [ref=e695]
                - generic [ref=e696]:
                  - generic [ref=e697]:
                    - heading "Product ELYSIUM" [level=3] [ref=e698]:
                      - generic [ref=e699]: Product
                      - text: ELYSIUM
                    - paragraph [ref=e700]:
                      - generic [ref=e701]: Description
                      - text: 좀비 아포칼립스 공포 탈출 퍼즐 전투게임
                    - generic [ref=e702]:
                      - generic [ref=e703]: Category
                      - text: RPG Puzzle Horror
                    - generic [ref=e704]:
                      - generic [ref=e705]: Review 8
                      - generic [ref=e706]: Recommended 14
                  - paragraph [ref=e709]:
                    - generic [ref=e710]: Price
                    - text: Free
                - link "Product ELYSIUM" [ref=e711] [cursor=pointer]:
                  - /url: /en/games/4495
          - generic [ref=e712]:
            - button " 이전":
              - generic:
                - text: 
                - generic: 이전
            - generic [ref=e713]:
              - button "1" [ref=e714] [cursor=pointer]
              - button "2" [ref=e715] [cursor=pointer]
              - button "3" [ref=e716] [cursor=pointer]
            - button " 다음":
              - generic:
                - text: 
                - generic: 다음
        - generic [ref=e717]:
          - generic "Search product" [ref=e719]:
            - generic "Search product" [ref=e720]:
              - textbox "Search product" [ref=e722]:
                - /placeholder: Search
                - text: action
              - button " Search" [ref=e723] [cursor=pointer]:
                - text: 
                - generic [ref=e724]: Search
          - generic [ref=e726]:
            - generic [ref=e727]:
              - button "Product Price" [expanded] [ref=e728] [cursor=pointer]:
                - generic [ref=e729]: Product Price
                - generic [ref=e730]:
                  - text: 
                  - generic [ref=e731]: folding
              - generic [ref=e732]:
                - generic [ref=e733]:
                  - group [ref=e734]:
                    - generic:
                      - slider "Min price": "0"
                      - slider "Max price": "2"
                  - generic [ref=e735]:
                    - generic "Min price" [ref=e736]:
                      - textbox "Min price" [disabled] [ref=e738]:
                        - /placeholder: store.min.amount
                        - text: "0"
                    - generic [ref=e739]: Min 0 dollars
                    - generic [ref=e740]: ~
                    - generic "Max price" [ref=e741]:
                      - textbox "Max price" [disabled] [ref=e743]:
                        - /placeholder: store.max.amount
                        - text: "234.99"
                    - generic [ref=e744]: Max 234.99 dollars
                - generic [ref=e746]:
                  - checkbox "View Discounted Only" [ref=e747]:
                    - checkbox "View Discounted Only" [ref=e748] [cursor=pointer]
                    - generic [ref=e749] [cursor=pointer]: View Discounted Only
                  - checkbox "Hide Free Products" [ref=e750]:
                    - checkbox "Hide Free Products" [ref=e751] [cursor=pointer]
                    - generic [ref=e752] [cursor=pointer]: Hide Free Products
            - generic [ref=e753]:
              - button "Product Type" [expanded] [ref=e754] [cursor=pointer]:
                - generic [ref=e755]: Product Type
                - generic [ref=e756]:
                  - text: 
                  - generic [ref=e757]: folding
              - group [ref=e759]:
                - checkbox "Base Game" [checked] [ref=e761]:
                  - checkbox "Base Game" [checked] [ref=e762] [cursor=pointer]: 
                  - generic [ref=e764] [cursor=pointer]: Base Game
                - checkbox "Utility" [ref=e766]:
                  - checkbox "Utility" [ref=e767] [cursor=pointer]
                  - generic [ref=e769] [cursor=pointer]: Utility
                - checkbox "Collection" [ref=e771]:
                  - checkbox "Collection" [ref=e772] [cursor=pointer]
                  - generic [ref=e774] [cursor=pointer]: Collection
                - checkbox "DLC" [ref=e776]:
                  - checkbox "DLC" [ref=e777] [cursor=pointer]
                  - generic [ref=e779] [cursor=pointer]: DLC
                - checkbox "DEMO" [ref=e781]:
                  - checkbox "DEMO" [ref=e782] [cursor=pointer]
                  - generic [ref=e784] [cursor=pointer]: DEMO
            - generic [ref=e785]:
              - button "Genre" [expanded] [ref=e786] [cursor=pointer]:
                - generic [ref=e787]: Genre
                - generic [ref=e788]:
                  - text: 
                  - generic [ref=e789]: folding
              - generic [ref=e790]:
                - group [ref=e791]:
                  - checkbox "RPG (97)" [checked] [ref=e793]:
                    - checkbox "RPG (97)" [checked] [ref=e794] [cursor=pointer]: 
                    - generic [ref=e795] [cursor=pointer]:
                      - generic [ref=e796]: RPG
                      - text: (97)
                  - checkbox "Action (83)" [ref=e798]:
                    - checkbox "Action (83)" [ref=e799] [cursor=pointer]
                    - generic [ref=e800] [cursor=pointer]:
                      - generic [ref=e801]: Action
                      - text: (83)
                  - checkbox "Adventure (41)" [ref=e803]:
                    - checkbox "Adventure (41)" [ref=e804] [cursor=pointer]
                    - generic [ref=e805] [cursor=pointer]:
                      - generic [ref=e806]: Adventure
                      - text: (41)
                  - checkbox "Strategy (13)" [ref=e808]:
                    - checkbox "Strategy (13)" [ref=e809] [cursor=pointer]
                    - generic [ref=e810] [cursor=pointer]:
                      - generic [ref=e811]: Strategy
                      - text: (13)
                  - checkbox "Casual (7)" [ref=e813]:
                    - checkbox "Casual (7)" [ref=e814] [cursor=pointer]
                    - generic [ref=e815] [cursor=pointer]:
                      - generic [ref=e816]: Casual
                      - text: (7)
                - button "See more" [ref=e817] [cursor=pointer]:
                  - generic [ref=e818]: See more
                  - generic [ref=e819]: 
            - generic [ref=e820]:
              - button "Tag" [expanded] [ref=e821] [cursor=pointer]:
                - generic [ref=e822]: Tag
                - generic [ref=e823]:
                  - text: 
                  - generic [ref=e824]: folding
              - generic [ref=e825]:
                - group [ref=e826]:
                  - checkbox "Single-Only (37)" [ref=e828]:
                    - checkbox "Single-Only (37)" [ref=e829] [cursor=pointer]
                    - generic [ref=e830] [cursor=pointer]:
                      - generic [ref=e831]: Single-Only
                      - text: (37)
                  - checkbox "3D (31)" [ref=e833]:
                    - checkbox "3D (31)" [ref=e834] [cursor=pointer]
                    - generic [ref=e835] [cursor=pointer]:
                      - generic [ref=e836]: 3D
                      - text: (31)
                  - checkbox "Fantasy (31)" [ref=e838]:
                    - checkbox "Fantasy (31)" [ref=e839] [cursor=pointer]
                    - generic [ref=e840] [cursor=pointer]:
                      - generic [ref=e841]: Fantasy
                      - text: (31)
                  - checkbox "Korean Localized (28)" [ref=e843]:
                    - checkbox "Korean Localized (28)" [ref=e844] [cursor=pointer]
                    - generic [ref=e845] [cursor=pointer]:
                      - generic [ref=e846]: Korean Localized
                      - text: (28)
                  - checkbox "Pixel art (24)" [ref=e848]:
                    - checkbox "Pixel art (24)" [ref=e849] [cursor=pointer]
                    - generic [ref=e850] [cursor=pointer]:
                      - generic [ref=e851]: Pixel art
                      - text: (24)
                - button "See more" [ref=e852] [cursor=pointer]:
                  - generic [ref=e853]: See more
                  - generic [ref=e854]: 
            - generic [ref=e855]:
              - button "Supported Features" [expanded] [ref=e856] [cursor=pointer]:
                - generic [ref=e857]: Supported Features
                - generic [ref=e858]:
                  - text: 
                  - generic [ref=e859]: folding
              - generic [ref=e860]:
                - group [ref=e861]:
                  - checkbox "Singleplayer" [ref=e863]:
                    - checkbox "Singleplayer" [ref=e864] [cursor=pointer]
                    - generic [ref=e866] [cursor=pointer]: Singleplayer
                  - checkbox "Multiplayer" [ref=e868]:
                    - checkbox "Multiplayer" [ref=e869] [cursor=pointer]
                    - generic [ref=e871] [cursor=pointer]: Multiplayer
                  - checkbox "PvP" [ref=e873]:
                    - checkbox "PvP" [ref=e874] [cursor=pointer]
                    - generic [ref=e876] [cursor=pointer]: PvP
                  - checkbox "Co-op" [ref=e878]:
                    - checkbox "Co-op" [ref=e879] [cursor=pointer]
                    - generic [ref=e881] [cursor=pointer]: Co-op
                  - checkbox "VR Support" [ref=e883]:
                    - checkbox "VR Support" [ref=e884] [cursor=pointer]
                    - generic [ref=e886] [cursor=pointer]: VR Support
                - button "See more" [ref=e887] [cursor=pointer]:
                  - generic [ref=e888]: See more
                  - generic [ref=e889]: 
            - generic [ref=e890]:
              - button "Supported Languages" [expanded] [ref=e891] [cursor=pointer]:
                - generic [ref=e892]: Supported Languages
                - generic [ref=e893]:
                  - text: 
                  - generic [ref=e894]: folding
              - generic [ref=e895]:
                - group [ref=e896]:
                  - checkbox "English" [ref=e898]:
                    - checkbox "English" [ref=e899] [cursor=pointer]
                    - generic [ref=e901] [cursor=pointer]: English
                  - checkbox "Korean" [ref=e903]:
                    - checkbox "Korean" [ref=e904] [cursor=pointer]
                    - generic [ref=e906] [cursor=pointer]: Korean
                  - checkbox "Chinese (Traditional)" [ref=e908]:
                    - checkbox "Chinese (Traditional)" [ref=e909] [cursor=pointer]
                    - generic [ref=e911] [cursor=pointer]: Chinese (Traditional)
                  - checkbox "Chinese (Simplified)" [ref=e913]:
                    - checkbox "Chinese (Simplified)" [ref=e914] [cursor=pointer]
                    - generic [ref=e916] [cursor=pointer]: Chinese (Simplified)
                  - checkbox "Japanese" [ref=e918]:
                    - checkbox "Japanese" [ref=e919] [cursor=pointer]
                    - generic [ref=e921] [cursor=pointer]: Japanese
                - button "See more" [ref=e922] [cursor=pointer]:
                  - generic [ref=e923]: See more
                  - generic [ref=e924]: 
          - text:  
    - generic [ref=e925]:
      - generic [ref=e926]:
        - generic [ref=e927]:
          - navigation [ref=e928]:
            - link "About Us" [ref=e929] [cursor=pointer]:
              - /url: https://www.smilegate.com/en
            - link "Terms of Use" [ref=e930] [cursor=pointer]:
              - /url: https://clause.onstove.com/stove/service
            - link "Privacy Policy" [ref=e931] [cursor=pointer]:
              - /url: https://clause.onstove.com/stove/privacy
            - link "Operation Policy" [ref=e932] [cursor=pointer]:
              - /url: https://clause.onstove.com/stove/oppolicy
            - link "Customer Service" [ref=e933] [cursor=pointer]:
              - /url: https://cs.onstove.com
            - link "STOVE Pay Terms of Use" [ref=e934] [cursor=pointer]:
              - /url: https://clause.onstove.com/stove/terms?category=service&only_game=Y&game_id=STOVEPAY
          - generic [ref=e935]:
            - link " youtube" [ref=e936] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCOhdy7pPpzFP_1xv8rATPpg
              - generic [ref=e937]:
                - text: 
                - generic [ref=e938]: youtube
            - link " kakao" [ref=e939] [cursor=pointer]:
              - /url: https://pf.kakao.com/_FVIyb
              - generic [ref=e940]:
                - text: 
                - generic [ref=e941]: kakao
            - link " twitter" [ref=e942] [cursor=pointer]:
              - /url: https://twitter.com/sgstove
              - generic [ref=e943]:
                - text: 
                - generic [ref=e944]: twitter
            - link " facebook" [ref=e945] [cursor=pointer]:
              - /url: https://www.facebook.com/sgstove
              - generic [ref=e946]:
                - text: 
                - generic [ref=e947]: facebook
            - link " instagram" [ref=e948] [cursor=pointer]:
              - /url: https://www.instagram.com/sgstove
              - generic [ref=e949]:
                - text: 
                - generic [ref=e950]: instagram
        - generic [ref=e951]:
          - generic [ref=e952]:
            - paragraph [ref=e953]:
              - generic [ref=e954]: Smilegate, Inc., Megaport Branch
              - generic [ref=e955]: "CEO: Sung Joon Ho"
              - generic [ref=e956]: "Address: 7F, 55, Bundang-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea"
            - paragraph [ref=e957]:
              - generic [ref=e958]: "Business Registration Number: 813-85-02492"
              - generic [ref=e959]: "Telecommunication Service Registration Number: 제2023-성남분당A-0145호"
          - button "Related Sites " [ref=e962] [cursor=pointer]:
            - generic [ref=e963]: Related Sites
            - generic [ref=e964]: 
        - paragraph [ref=e966]: Smilegate, Inc., Megaport Branch serves as a mediator for the online sales of individual digital content and is not liable for the actual online sales transaction. Each individual content provider within the STOVE service bears full responsibility for the products, product information, and transactions they register. However, in the case of content directly provided by Smilegate, Inc., Megaport Branch, it takes responsibility as the online seller.
        - paragraph [ref=e968]: © Smilegate. All Rights Reserved.
        - paragraph [ref=e969]:
          - link "Smilegate" [ref=e970] [cursor=pointer]:
            - /url: https://www.smilegate.com/en
            - img "Smilegate" [ref=e971]
      - text: 
  - text:    
```

# Test source

```ts
  1  | import { test, expect } from "../../src/fixtures/fixtures";
  2  | import { searchProducts } from "../../src/api/search.api";
  3  | 
  4  | const PRODUCT_NO = 2173;
  5  | const GAME_TITLE = "Action Taimanin";
  6  | 
  7  | const SEARCH_QUERY = "action";
  8  | const FILTER_BASE_GAME_API = "GAME";
  9  | const FILTER_RPG_TAG_ID = "2";
  10 | 
  11 | test.describe("Onstove Store", () => {
  12 |   test("TC-001: Verify age of 18+ warning on first visit, hides it after Continue and reload", async ({ app }) => {
  13 |     await test.step("1. Navigate to the age-gated product → warning appears", async () => {
  14 |       await app.storePage.goto(`/restrictions/agree?productNo=${PRODUCT_NO}`);
  15 |       await app.storePage.assertAgeWarningVisible();
  16 |     });
  17 | 
  18 |     await test.step("2. Click Continue → game title is 'Action Taimanin'", async () => {
  19 |       await app.storePage.clickAgeContinue();
  20 |       await app.storePage.assertGameTitle(GAME_TITLE);
  21 |     });
  22 | 
  23 |     await test.step("3. Refresh page → warning does not appear again", async () => {
  24 |       await app.storePage.refreshPage();
  25 |       await app.storePage.assertAgeWarningHidden();
  26 |     });
  27 |   });
  28 | 
  29 |   test("TC-002: Verify Lord Nine game is in dropdown list", async ({ app }) => {
  30 |     await test.step("1. Navigate to the homepage", async () => {
  31 |       await app.storePage.goto();
  32 |     });
  33 | 
  34 |     await test.step("2. Search for 'lord' → 'Lord Nine' appears in search results", async () => {
  35 |       const searchTerm = "lord";
  36 |       const expectedFirstResult = "Lord Nine";
  37 |       await app.storePage.searchForGame(searchTerm, false);
  38 |       await app.storePage.assertFirstSearchResult(expectedFirstResult);
  39 |     });
  40 |   });
  41 | 
  42 |   test("TC-003: Verify search result count matches API total_elements", async ({ app, request }) => {
  43 |     await test.step("1. Open homepage", async () => {
  44 |       await app.storePage.goto();
  45 |     });
  46 | 
  47 |     await test.step(`2. Search for "${SEARCH_QUERY}" and submit`, async () => {
  48 |       await app.storePage.searchForGame(SEARCH_QUERY, true);
  49 |     });
  50 | 
  51 |     await test.step("3. Apply filter", async () => {
  52 |       await app.storePage.applyFilter("Product Type", "Base Game");
  53 |       await app.storePage.applyFilter("Genre", /^RPG/);
  54 |     });
  55 | 
  56 |     await test.step("4. Assert: Total items count on UI matches with displayed result count", async () => {
  57 |       const uiCount = await app.storePage.getDisplayedResultCount();
  58 |       expect(uiCount).toBeGreaterThan(0);
  59 |       const apiResult = await searchProducts(request, {
  60 |         q: SEARCH_QUERY,
  61 |         types: FILTER_BASE_GAME_API,
  62 |         tags: FILTER_RPG_TAG_ID,
  63 |       });
  64 |       const totalPages = apiResult.value.total_pages;
  65 |       const totalItemsOnAllPages = await app.storePage.getTotalItemsOnAllPages(totalPages);
> 66 |       expect(uiCount).toBe(totalItemsOnAllPages);
     |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  67 |       expect(apiResult.value.total_elements).toBeGreaterThan(0);
  68 |       expect(totalItemsOnAllPages).toBe(apiResult.value.total_elements);
  69 |       expect(totalItemsOnAllPages).toBe(uiCount);
  70 |     });
  71 |   });
  72 | 
  73 |   test("TC-004: Verify hover feature", async ({ app }) => {
  74 |     const GAME_NAME = "Pulse of Love";
  75 |     const SEARCH_TERM = "Love of";
  76 | 
  77 |     await test.step("1. Open website", async () => {
  78 |       await app.storePage.goto();
  79 |     });
  80 | 
  81 |     await test.step("2. Search for Love of and hit enter button", async () => {
  82 |       await app.storePage.searchForGame(SEARCH_TERM, true);
  83 |     });
  84 | 
  85 |     await test.step("3. Switch to Card view", async () => {
  86 |       await app.storePage.switchToViewMode("card");
  87 |     });
  88 | 
  89 |     await test.step("4. Hover on game Pulse of Love and assert hover effects", async () => {
  90 |       await app.storePage.assertCardHover(GAME_NAME);
  91 |     });
  92 |   });
  93 | });
  94 | 
```