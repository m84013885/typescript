
export const event = [
    {
        "name": "time",
        "max": 30,
        "to": 13
    },
    {
        "name": "sad",
        "max": 5,
        "to": 20
    },
    {
        "name": "find",
        "max": 2,
        "to": 26
    },
]

export const fetchRes = [
    {
        "step": 0,
        "type": 11,
        "content": '在上梅林村民之间有这样一个传闻。相传只要在上梅林呆上<r>整整一个月</r>，没离开过，那就再也<r>离不开上梅林</r>这个地方了...',
        "level": 2,
        "img": "https://avatar.yuanbobo.com/L5SAVPQHJNBRRPSF.jpg?imageMogr2/thumbnail/720x720/auto-orient",
        "imgType": ''
    },
    {
        "step": 1,
        "type": 11,
        "content": '你就像往常一样下班走上楼梯，只是今天的脚步比平时还要沉重一些。最近的经济不景气，公司裁员，正好裁了你。你拿着公司给的赔偿逐渐陷入迷茫当中，不知道前路到底在哪里。你觉得你现在应该怎么做。',
        "level": 1,
        "showImg": 'https://avatar.yuanbobo.com/L5SAVPQHJNBRRPSF.jpg?imageMogr2/thumbnail/720x720/auto-orient',
        "tabs": [
            {
                "state": [
                    { "name": "sad", "number": 1 },
                    { "name": "time", "number": 14 }
                ],
                "to": 2,
                "text": "马上找工作"
            },
            {
                "state": [
                    { "name": "time", "number": 14 }
                ],
                "to": 9,
                "text": "先休息一段时间"
            }
        ]
    },
    {
        "step": 2,
        "type": 11,
        "content": '回到家，你马上更新简历，更新完投向了几个你心仪的公司，争取早日找到一份新的工作。',
        "level": 0,
    },
    {
        "step": 3,
        "type": 11,
        "content": '这两个星期坚持不懈的投简历，修改简历。到现在都没有收到面试的通知，你已经逐渐疲惫了。你<r>感到很沮丧</r>。你打算怎么解决目前的情况。',
        "level": 1,
        "tabs": [
            {
                "state": [
                    { "name": "time", "number": 9 }
                ],
                "to": 4,
                "text": "坚持找工作"
            },
            {
                "state": [
                    { "name": "time", "number": 30 }
                ],
                "to": 12,
                "text": "随缘找工作一段时间"
            }
        ]
    },
    {
        "step": 4,
        "type": 11,
        "content": '经过<r>这两个星期</r>给你的教训，你知道你要改变策略了，现在不在是只投心仪的公司，而是广撒网的投简历的策略，不管三七二十一，先去面试再说。',
        "level": 0,
    },
    {
        "step": 5,
        "type": 11,
        "content": '又<r>过了一个多星期</r>，总算有一家公司联系了你，那家公司给了你两个时间，这个周末或者下周一。你看了看天气预报，说是这个周末是连续的大雨，而下周一是个大晴天。你的选择是。',
        "level": 1,
        "tabs": [
            {
                "state": [
                    { "name": "time", "number": 1 }
                ],
                "to": 6,
                "text": "这个周末"
            },
            {
                "to": 10,
                "text": "下周一"
            }
        ]
    },
    {
        "step": 6,
        "type": 11,
        "content": '你预约了周六的早上。',
        "level": 2,
        "img": "https://avatar.yuanbobo.com/cover/T7VF8DT7RRZ3F8PV.jpg?imageMogr2/thumbnail/480x480/auto-orient",
        "imgType": ''
    },
    {
        "step": 7,
        "type": 11,
        "showImg": "https://avatar.yuanbobo.com/cover/T7VF8DT7RRZ3F8PV.jpg?imageMogr2/thumbnail/480x480/auto-orient",
        "content": '你周五早早就睡下了。到了周六的早上，果然如愿的下起了大暴雨。但是这些都已经不能阻止你去面试。并且路线你已经掌握好了，按理说地铁是比较稳妥的，但是叫滴滴过去更为方便一点，你的选择是？',
        "level": 1,
        "tabs": [
            {
                "conditions": [
                    {
                        "type": "min",
                        "typeName": "time",
                        "number": 30,
                        "to": 8,
                        "next": 10
                    }
                ],
                "to": 8,
                "text": "地铁"
            },
            {
                "to": 9,
                "text": "滴滴"
            }
        ]
    },
    {
        "step": 8,
        "type": 21,
        "content": '你家距离地铁站还是有一定路程，你冒着大雨去坐地铁，一身都被大雨淋湿了。但也成功的上了地铁。',
        "level": '',
    },
    {
        "step": 9,
        "type": 11,
        "content": '你拿着公司给你的补偿，决定好好的休息一段时间，接下来的日子里你每天都很休闲，叫叫外卖看看电视玩玩游戏，日子过得很愉快。一眨眼，<r>两个星期过去了</r>。你妈看了你目前的状况，提醒你要马上找工作了。你打算怎么做？',
        "level": 1,
        "tabs": [
            {
                "state": [
                    { "name": "time", "number": 14 }
                ],
                "to": 10,
                "text": "不理会，继续玩乐"
            },
            {
                "state": [
                    { "name": "time", "number": 14 }
                ],
                "to": 11,
                "text": "随缘的方式找工作"
            },
            {
                "state": [
                    { "name": "time", "number": 14 }
                ],
                "to": 3,
                "text": "是时候努力找工作了"
            }
        ]
    },
    {
        "step": 10,
        "type": 11,
        "content": '又<r>过了两个星期</r>，你逐渐习惯了目前的状况，仔细想想这种情况好像也不错，你也就渐渐不打算再找工作了。',
        "level": ""
    },
    {
        "step": 11,
        "type": 11,
        "content": '又<r>过了两个星期</r>，你投的简历完全得不到回应，全都石沉大海。因为你本来就是以随缘的心态面对这次的投简历，所以对你的心态并没有什么影响。接下来你打算怎么做？',
        "level": 1,
        "tabs": [
            {
                "state": [
                    { "name": "time", "number": 30 }
                ],
                "to": 12,
                "text": "继续随缘找工作"
            },
            {
                "to": 3,
                "text": "是时候努力找工作了"
            }
        ]
    },
    {
        "step": 12,
        "type": 11,
        "content": '你佛系的心态很让人佩服。时间过得飞快，<r>一个月过去了</r>，你还没收到任何消息。',
        "level": 0,
    },
    {
        "step": 13,
        "type": 11,
        "content": '这天有朋友约你出去喝东西聊聊天。你已经在家里待了好长一段时间了，你也打算出去走走，就爽快的答应了。',
        "level": 0,
    },
    {
        "step": 14,
        "type": 11,
        "content": '这天晴空万里，你和朋友约好在中心城喝东西，中心城离你家不远，坐地铁的话只需要两个站。你就自然而然的去坐地铁了。',
        "level": 2,
        "img": "https://avatar.yuanbobo.com/cover/P91GD1AP6O5BLEN3.jpg?imageMogr2/thumbnail/480x480/auto-orient",
        "imgType": ''
    },
    {
        "step": 15,
        "type": 11,
        "content": '进了地铁站，地铁来了，但是你遇到了一件非常诡异的事情。不知道为什么你就是进不去地铁里。地铁的门开了之后好像还有一层隐形的门，还没开一样，你全身贴上去、往那看不见的门撞、甚至可以把东西扔进去，但你的人就是进不去，身边的人进进出出，就像是看不见你一样。你就这样目送地铁开走。这时你才想起，那个关于<r>上梅林的传闻...</r>',
        "level": 1,
        "showImg": "https://avatar.yuanbobo.com/cover/P91GD1AP6O5BLEN3.jpg?imageMogr2/thumbnail/480x480/auto-orient",
        "tabs": [
            {
                "state": [
                    { "name": "sad", "number": 1 }
                ],
                "to": 16,
                "text": "马上回家"
            },
            {
                "to": 3,
                "text": "打车去"
            },
            {
                "to": 3,
                "text": "走路去"
            },
        ]
    },
    {
        "step": 16,
        "type": 11,
        "content": '你这一路慌忙的小跑回家，你不敢相信这种诡异的事情居然会发生在自己的身上。回到家你就马上去问妈妈关于那个传闻的事情，妈妈在上梅林住了十几年了肯定是比较了解这到底是怎么回事。',
        "level": 0
    },
    {
        "step": 17,
        "type": 12,
        "content": '不料你妈只是<r>面目狰狞</r>的看着你，然后平静的说出这样一句话，“这不是理所当然的吗？”这时你才想起，你妈妈真的从你出生到现在从来没有离开过上梅林这个地方。你<r>感到一阵心凉</r>，不知道如何是好。',
        "level": 1,
        "img": "https://avatar.yuanbobo.com/cover/4N1CYRRRH9VX5MH3.jpg?imageMogr2/thumbnail/480x480/auto-orient",
        "imgType": '',
        "tabs": [
            {
                "to": 18,
                "text": "回到房间想办法"
            },
            {
                "mask": 1,
                "to": 21,
                "text": "跑下楼想办法"
            }
        ]
    },
    {
        "step": 18,
        "type": 11,
        "content": '你回到房间，逐渐平静下来，可能是那一瞬间太紧张了，然后回到家里又很放松，你就躺在床上睡着了。在睡梦中，你梦到你被困在一个狭小的空间，但有个人把你拉了出来，你正眼一看...',
        "level": 1,
        "tabs": [
            {
                "state": [
                    { "name": "sad", "number": 5 }
                ],
                "to": 19,
                "text": "是一个乞丐！"
            }
        ]
    },
    {
        "step": 19,
        "type": 12,
        "content": '突然一阵惊醒，你还迷迷糊糊的，但是你惊奇的发现，你被绑住了。你只发现你妈妈手中拿着菜刀，口中喃喃自语“都怪你，要不是你的话，我就不会被困在这个鬼地方了。都怪你，都怪你...”，你已经明白到了，你妈妈打算怎么做了。而且你没有一点反抗的可能。',
        "level": 0
    },
    {
        "step": 20,
        "type": 21,
        "content": '你感到绝望了，面如死灰，一切都无所谓了。就这样吧...',
        "level": '',
    },
    {
        "step": 21,
        "type": 12,
        "showImg": "https://avatar.yuanbobo.com/cover/4N1CYRRRH9VX5MH3.jpg?imageMogr2/thumbnail/480x480/auto-orient",
        "content": '你感觉你妈妈好像有点问题，你匆忙的跑下了楼，然后站在村里最繁华的十字路口，感到非常的迷茫。眼前的繁华好像和你现在的心情一点关系都没有一样。',
        "level": 0
    },
    {
        "step": 22,
        "type": 11,
        "content": '你决定去找谁帮忙。',
        "level": 1,
        "tabs": [
            {
                "state": [
                    { "name": "find", "number": 1 }
                ],
                "to": 23,
                "text": "总帮衬的包子铺大叔"
            },
            {
                "to": 20,
                "text": "并不常见的乞丐"
            },
            {
                "state": [
                    { "name": "find", "number": 1 }
                ],
                "to": 24,
                "text": "便利店的豪放大姐"
            },
            {
                "state": [
                    { "name": "find", "number": 1 }
                ],
                "to": 25,
                "text": "菜鸟驿站忙碌的大哥"
            },
        ]
    },
    {
        "step": 23,
        "type": 11,
        "content": '你把发生在你身上的事情一五一十的对包子铺的大叔说了。包子铺的大叔听完之后特意走出狭小的包子铺，拍拍了你的肩膀，嘱咐你别再嗑药了。',
        "level": 0,
        "resetTo": 22
    },
    {
        "step": 24,
        "type": 11,
        "content": '你把发生在你身上的事情一五一十的对便利店的大姐说了。便利店的大姐听完之后，居然免费送了你一瓶红牛。还带惋惜似的摇摇头。',
        "level": 0,
        "resetTo": 22
    },
    {
        "step": 25,
        "type": 11,
        "content": '你把发生在你身上的事情一五一十的对菜鸟驿站的大哥说了。菜鸟驿站的大哥直接就把你赶走了。',
        "level": 0,
        "resetTo": 22
    },
    {
        "step": 26,
        "type": 11,
        "content": '你没办法了，受了两次打击，只好壮壮胆回家去了。你也没做什么亏心事，只是在家里呆久了。这有什么的。你就这样回家去了。',
        "level": 0,
        "resetTo": 18
    },
]