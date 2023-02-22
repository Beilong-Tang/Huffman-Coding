## Step 3. Build Huffman Binary Tree (Sorted Binary Tree)

<div class='flex'>

<div class='w-1/2-a h-50 ml-10'>

<div class='absolute frequency w-100'> 

<div class='w-100'>

|  B  |  D  |  A  |  C  |
| --- | --- | --- | --- |
|  1  |  3  |  5  |  6  |

</div>

</div>

<div class='absolute frequency w-100' v-click='3'>

<div class='w-2/3-a'>

|  *  |  A  |  C  |
| --- | --- | --- |
|  4  |  5  |  6  |

</div>

</div>

<div class='absolute frequency w-100' v-click='6'>

<div class='w-2/3-a'>

|  **   |  C  |
| ---  | --- |
|  9 |  6  |

</div>

</div>

<div class='absolute frequency w-150' v-click='9'>

<div class='w-2/3-a'>

|  B  |  D  |  A  |  C  |
| --- | --- | --- | --- |
|  1  |  3  |  5  |  6  |

</div>

</div>



</div>


<div class='w-1/2-a'>

<div class='absolute frequency w-100' v-click = '2' >


```mermaid {'themeVariables': {'edgeLabelBackground':'none', 'fontSize': '23px' }  }
flowchart TB;
    R1((4))-->B((1))
    R1-->D((3))


    style B fill:#34d399
    style D fill:#34d399

```


</div>

<div class='absolute frequency w-100' v-click = '5' >


```mermaid {'themeVariables': {'edgeLabelBackground':'none', 'fontSize': '23px' }  }
flowchart TB;
    R2((9))-->R1((4))
    R2((9))-->A((5))
    R1-->B((1))
    R1-->D((3))

    style A fill:#34d399
    style B fill:#34d399
    style D fill:#34d399

```


</div>

<div class='absolute frequency w-100' v-click = '8' >


```mermaid {'themeVariables': {'edgeLabelBackground':'none', 'fontSize': '23px' }  }
flowchart TB;

    R3((15))-->C((6))
    R3-->R2((9))

    R2-->R1((4))
    R2-->A((5))
    R1-->B((1))
    R1-->D((3))

    style A fill:#34d399
    style C fill:#34d399
    style B fill:#34d399
    style D fill:#34d399

```


</div>

<div class='absolute frequency w-100' v-click = '10' >


```mermaid {'themeVariables': {'edgeLabelBackground':'#fef9c3', 'fontSize': '23px' }  }
flowchart TB;

    R3((15))-->|0|C((6))
    R3-->|1|R2((9))

    R2-->|0|R1((4))
    R2-->|1|A((5))
    R1-->|0|B((1))
    R1-->|1|D((3))

    style A fill:#34d399
    style C fill:#34d399
    style B fill:#34d399
    style D fill:#34d399

```


</div>



</div>

</div>

<br>

<div v-click='1' class='ml-5'>

**1. Merge B and D**

</div>

<div v-click='4' class='ml-5'>

**2. Merge * and A**

</div>

<div v-click='7' class='ml-5'>

**2. Merge ** and C**

</div>


<style>

  .frequency{
    top:130px;
    background-color: rgba(243,232,255,1) !important;
  }

  table {
    margin-top:20px;
    border: 1px solid black;
    font-size:20px;
    width:40% !important;
  }

  th {
    background-color:#60a5fa;
    border: 1px solid black;
  }

  td{
    border: 1px solid black;
  }

  </style>