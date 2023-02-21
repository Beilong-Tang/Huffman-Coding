Given three elements {a,b,c}, write a recursive program to return all the combinations.

```
 , a, b, c, ab, ac, bc, abc
```
<div v-click>

For each element, we have two choices.

</div>


<div style="height:300px">


<!-- Animation 1 -->

<div v-click class='absolute diagram'>

```mermaid {'themeVariables': {'edgeLabelBackground':'none' }  }
graph TB;
    A((0))-->|0|B((a))
    A-->|1|C((a))
    B-->|0|D((b))
    B-->|1|E((b))
    C-->|0|F((b))
    C-->|1|G((b))
    
    D-->|0|H((c))
    D-->|1|I((c))
    
    E-->|0|J((c))
    E-->|1|K((c))

    F-->|0|L((c))
    F-->|1|M((c))

    G-->|0|N((c))
    G-->|1|O((c))


```

</div>

<!-- Animation 2 -->

<div v-click class='absolute diagram'>

```mermaid {'themeVariables': {'edgeLabelBackground':'#fef9c3' }  }
flowchart TB;
    A((0))-->|0|B((a))
    A-->|1|C((a))
    B-->|0|D((b))
    B-->|1|E((b))
    C-->|0|F((b))
    C-->|1|G((b))
    
    D-->|0|H((c))
    D-->|1|I((c))
    
    E-->|0|J((c))
    E-->|1|K((c))

    F-->|0|L((c))
    F-->|1|M((c))

    G-->|0|N((c))
    G-->|1|O((c))

    style H fill:#34d399
    style I fill:#34d399
    style J fill:#34d399
    style K fill:#34d399
    style L fill:#34d399
    style M fill:#34d399
    style N fill:#34d399
    style O fill:#34d399

```

</div>


</div>

<div v-click>

```
000, 001, 010, 011, 100, 101, 110, 111
```


</div>

<div v-click>

We call '000' the **label** of the left most leaf.

</div>


<style>
    .diagram{
        background-color: rgba(243,232,255,1) !important;
        width:500px !important;
        left:22%;
    }

    .edgeLable{
        background-color:red;
    }

    </style>
