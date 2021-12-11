let alldata = [
    {id: 0,
        name: "Moose",
        description: "This is Moose. He’s wondering where Santa’s reindeer tryouts are. Knows he has what it takes. 12/10 please point him in the right direction",
        src: "https://pbs.twimg.com/media/FGINqdpUcAItVF-?format=jpg&name=medium",
        clicked: false,
        class: "moose-image",
        rating: "12/10"
    }, 
    {id: 1,
        name: "Libby",
        description: "This is Libby. She had a scab on her nose and when it healed, it left a perfect pink heart. A target for your smooches, if you will. 14/10 ",
        src: "https://pbs.twimg.com/media/FGBl8EnVIAQapt0?format=jpg&name=900x900 ",
        clicked: false,
        class: "moose-image",
        rating: "14/10"
    }, 
    {id: 2,
        name: "Howdy",
        description: "This is Howdy. He’s the new sheriff. I know he’s not like super intimidating but please respect his authority. He gets grumpy if you don’t. 12/10 ",
        src: "https://pbs.twimg.com/media/FF94UlwVQAUpkTW?format=jpg&name=small",
        clicked: false,
        class: "moose-image",
        rating: "12/10"
    },
    {id: 3,
        name: "Teddy",
        description: "This is Teddy. He’s found several clues that indicate there’s a good boy around here somewhere. Maybe you’ve seen him. 14/10",
        src: "https://pbs.twimg.com/media/FFihj9DVEAA59tv?format=jpg&name=medium",
        clicked: false,
        class: "moose-image",
        rating: "14/10"
    },   
    {id: 4,
        name: "Roxie",
        description: "I accidentally kicked the back of this guy’s seat and now he won’t stop making faces at me. Idk what he wants. 14/10 ",
        src: "https://pbs.twimg.com/media/FE-ixZyUcAQpORn?format=jpg&name=small",
        clicked: false,
        class: "moose-image",
        rating: "14/10"
    },   
    {id: 5,
        name: "Baxter",
        description: "This is Baxter. He’s going to need a lot of attention today. He can just tell. 14/10 ",
        src: "https://pbs.twimg.com/media/FE5W6_GVEAIDEbu?format=jpg&name=medium",
        clicked: false,
        class: "moose-image",
        rating: "14/10"
    }, 
    {id: 6,
        name: "Chevy",
        description: "This is Chevy. He doesn’t mind the colder weather because he gets to wear his hoodie. It’s very cozy. 13/10",
        src: "https://pbs.twimg.com/media/FEQmvf7UUAAoNLj?format=jpg&name=medium",
        clicked: false,
        class: "moose-image",
        rating: "13/10"
    },
    {id: 7,
        name: "Titus and Roo",
        description: "This is Titus and Roo. Titus doesn’t stop drooling so Roo got a raincoat for when they hang out. It seems dramatic but it’s not. 13/10 for both ",
        src: "https://pbs.twimg.com/media/FD8-BDWVkAst1pN?format=jpg&name=small ",
        clicked: false,
        class: "moose-image",
        rating: "13/10"
    },   
    {id: 8,
        name: "Dino",
        description: "Seriously? We only rate dogs. This is a velociraptor. She won’t hurt you she is just startled. Please send dogs only. Thank you… 13/10 ",
        src: "https://pbs.twimg.com/media/FD7c-_3VUAI8UQk?format=jpg&name=medium ",
        clicked: false,
        class: "moose-image",
        rating: "13/10"
    },  
    {id: 9,
        name: "Louie",
        description: "This is Louie. He’s been catching flights while you’ve been catching feelings. 12/10 embarrassing for you",
        src: "https://pbs.twimg.com/media/FD21u10UUAIMTxs?format=jpg&name=small",
        clicked: false,
        class: "moose-image",
        rating: "12/10"
    }, 
    {id: 10,
        name: "Nova",
        description: "This is Nova. She’s an amateur bandana model trying to break into the professional scene. 14/10 we believe in you sweetie",
        src: "https://pbs.twimg.com/media/FDxU0gZX0AgL6Yv?format=jpg&name=large ",
        clicked: false,
        class: "moose-image",
        rating: "12/10"
    },
    {id: 11,
        name: "Kabosu",
        description: "This is Kabosu. She just turned 16 years old. She’s a rescue Shiba Inu who changed the world with an impromptu photoshoot back in 2010. Her slightly raised eyebrows and crossed paws remain one the greatest reaction images of all time. 15/10 such legend much wow",
        src: "https://pbs.twimg.com/media/FDOdLmKVQAIStvp?format=jpg&name=small ",
        clicked: false,
        class: "moose-image",
        rating: "15/10"
    },
    {id: 12,
        name: "Saoirse",
        description: "This is Saoirse. She was on track to become one of the best snowflake collectors of her generation. Sadly, she developed hip dysplasia and had to take a break to fix it.",
        src: "https://pbs.twimg.com/media/FDNPwuOVEAEzIRb?format=jpg&name=900x900",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 13,
        name: "Coach",
        description: "This is Coach. She overheard you say something about the neighbor being a good girl. Just checking if that was about her. 12/10",
        src: "https://pbs.twimg.com/media/FDJUCtnUUAAy01Z?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "12/10"
    },
    {id: 14,
        name: "Atlas",
        description: "This is Atlas. He just got his braces off. Wanted to show everyone his new smile. 14/10 it’s delightful buddy ",
        src: "https://pbs.twimg.com/media/FC0z5HcUYAQDj3r?format=jpg&name=900x900",
        clicked: false,
        class: "",
        rating: "14/10"
    },
    {id: 15,
        name: "Sadie and Niki",
        description: "This is Sadie and Niki. They have to be touching at all times. Doesn't matter how. 14/10 for both",
        src: "https://pbs.twimg.com/media/FCzfEXqWEAIg53j?format=jpg&name=small ",
        clicked: false,
        class: "",
        rating: "14/10"
    },
    {id: 16,
        name: "Chad",
        description: "This is Chad. He’s a very good boy. Likes being held. Fluffy and portable. Weird bark but that’s okay. 12/10 would definitely pet",
        src: "https://pbs.twimg.com/media/FCuPPJNWQAwRE0x?format=jpg&name=small ",
        clicked: false,
        class: "",
        rating: "12/10"
    },
    {id: 17,
        name: "Cooper",
        description: "This is Cooper. He built the picket fence himself. Needed a break from the rest of the world. 13/10 relatable as h*ck",
        src: "https://pbs.twimg.com/media/FCpnD4RUcAMa8fO?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "1310"
    },
    {id: 18,
        name: "Hagar",
        description: "This is Hagar. He is watching you watch his favorite movie and wants to make sure you laugh at the funny parts. 13/10 he'll rewind if you didn't catch that last one",
        src: "https://pbs.twimg.com/media/FClrRwcVIAc30QV?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 19,
        name: "Ragnar",
        description: "This is Ragnar. He's on his way to the park. Never been to one before. Put on a bow tie to hopefully make a good first impression. 13/10",
        src: "https://pbs.twimg.com/media/FCjqcVwWQAoxKzS?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 20,
        name: "Frysauce",
        description: "This is Frysauce. He spent the entire summer crocheting this sweater for you. Only rule is that you have to share it with him. 14/10",
        src: "https://pbs.twimg.com/media/FCBgguSVUAgpkTS?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "14/10"
    },
    {id: 21,
        name: "Beau",
        description: "This is Beau. He’s taking a power snoozle before continuing his med school studies. Wears the stethoscope for motivation. 13/10 we believe in you ",
        src: "https://pbs.twimg.com/media/FB_8VOzXEAARr0p?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 22,
        name: "Lily",
        description: "This is Lilly. She just parallel barked. Kindly requests a reward now. 13/10 would pet so well",
        src: "https://pbs.twimg.com/media/FBrImU-WQAEkqIB?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 23,
        name: "Kalua",
        description: "This is Kalua. He has a big date tonight. Little nervous about his choice of bow tie, but we don't think he has reason to be. 14/10 you're gonna do great buddy",
        src: "https://pbs.twimg.com/media/FBnnNZ4UYAYFq2u?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "14/10"
    },
    {id: 24,
        name: "Kilo and Tofu",
        description: "This is Kiko and Tofu. They were walking along the beach when Tofu started floating away. Somebody call someone. Anybody. Please. Both 13/10 ",
        src: "https://pbs.twimg.com/media/FBl6XpuWEAAmS-m?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 25,
        name: "Onyx",
        description: "We only rate dogs. This is a Patagonian Round Bat. Reacts positively to watermelon, but that's all we know so far. Please send dogs only. Thank you... 12/10",
        src: "https://pbs.twimg.com/media/FBhvESzXMAMdddS?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "12/10"
    },
    {id: 26,
        name: "Leon",
        description: "This is Leon. He is very puppared for any inclement weather. Literally nothing could come between him and his walkies. 13/10 ",
        src: "https://pbs.twimg.com/media/FA9yk4NVEAIPttm?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 27,
        name: "Huxley",
        description: "This is Huxley. He hopes you had a good day, but if not, he’s conveniently right here and an excellent listener. 14/10",
        src: "https://pbs.twimg.com/media/FAfgd0eVcAAjtdM?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "14/10"
    },
    {id: 28,
        name: "Rux",
        description: "This is Rux. He needs everyone to know this is not a phase. This is who he really is. 13/10",
        src: "https://pbs.twimg.com/media/FAPL7y9VgAMZQ9N?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 29,
        name: "Nellie",
        description: "This is Nellie. She’s an astronaut. Please don’t interrupt her spacewalk. 13/10 ",
        src: "https://pbs.twimg.com/media/EU7nm_nXkAA9734?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 30,
        name: "Ace",
        description: "This is Ace. He went to his first ever baseball game AND got to try a hot dog. Was excited about both, but a little bit more so for the hot dog. 13/10 ",
        src: "https://pbs.twimg.com/media/FAAmXwDVIAQAkwu?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 31,
        name: "Stanley",
        description: "This is Stanley. He is patiently waiting his 30 minutes after eating so he can hop in the pool. 12/10 safety first",
        src: "https://pbs.twimg.com/media/E_60WlQVgAYriWA?format=jpg&name=900x900",
        clicked: false,
        class: "",
        rating: "12/10"
    },
    {id: 32,
        name: "Kevin",
        description: "This is Kevin. He’s an aspiring astronaut. Always brings his stuffed bear on training missions. 14/10 ufomg",
        src: "https://pbs.twimg.com/media/E_1EeaLUUAMaxBh?format=jpg&name=large",
        clicked: false,
        class: "",
        rating: "14/10"
    },
    {id: 33,
        name: "Haru",
        description: "This is Haru. She is just now waking from her food coma. It lasted all weekend. A few more minutes couldn’t hurt though. 13/10",
        src: "https://pbs.twimg.com/media/FFYTevEVEAcN48I?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "13/10"
    },
    {id: 34,
        name: "Mochi",
        description: "Mochi is ready to obliterate these treats",
        src: "https://pbs.twimg.com/media/FFAMO4cVQAEF5ie?format=jpg&name=medium",
        clicked: false,
        class: "",
        rating: "14/10"
    },
    {id: 35,
        name: "Dogus",
        description: "This is Doogus. We were told someone laughed at his pj’s, so now he needs your help to feel better. 14/10 they’re delightful Doogus",
        src: "https://pbs.twimg.com/media/FE1oQWXVQAE2eDE?format=jpg&name=small",
        clicked: false,
        class: "",
        rating: "14/10"
    },
];

export default alldata 