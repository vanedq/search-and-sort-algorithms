# Search and Sort Algorithms
These algorithms were first created as a personal challenge, but once finished, I thought it'd be nice to upgrade it to an interactive program.


In the runtime, you can choose between the following options:

|||
|-|-|
|1|Linear Search
|2|Binary Search
|3|Insertion Sort
|4|Merge Sort
|5|Bubble Sort
|6|Quick Sort
||

(Or `0` to exit the program).

The searching algorithms will create an array with 100 elements for you to pick the `target` number so it can search for and return its index, while the sorting algorithms will ask you to create an array for it to sort.


## Linear Search
This search algorithm checks the values in every index sequentially until it finds the target value.


The program will create and present you an array with 100 unique elements (not ordered) and ask you for the target number. Then, it will search for it linearly, index-by-index until the target is found.

```
                  Array                        Target = 2
[ 3 ] [ 5 ] [ 2 ] [ 1 ] [ 7 ] [ 9 ] [ 8 ]
  ↓
[ 3 ] [ 5 ] [ 2 ] [ 1 ] [ 7 ] [ 9 ] [ 8 ]
        ↓
[ 3 ] [ 5 ] [ 2 ] [ 1 ] [ 7 ] [ 9 ] [ 8 ]
              ↓  target found!
[ 3 ] [ 5 ] [ 2 ] [ 1 ] [ 7 ] [ 9 ] [ 8 ]
```
> Note: The console is not programmed to output illustrations like this, it will mostly return text. These representations were created only to ease understanding.

## Binary Search
This search algorithm works only with ordered arrays. It splits the array in two halves, comparing the number in the middle with the target number until it finds it. If the middle element is not the target, then the half where the target cannot be in will be eliminated, cutting the number of checks in half.

```
                  Array                            Target = 6
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ]

       Left          Middle         Right         Compares Target to Middle
[ 1 ] [ 2 ] [ 3 ]    [ 4 ]    [ 5 ] [ 6 ] [ 7 ]

Target > Middle, therefore, the array will be rewritten eliminating the previous left part

       New Array
   [ 5 ] [ 6 ] [ 7 ]

Left     Middle   Right       Compares Target to Middle
[ 5 ]    [ 6 ]    [ 7 ]       Target = Middle... target found!
```

## Insertion Sort
This sorting algorithm will keep a key (which is the element being checked), comparing it with the elements on its left, making sure they're smaller. This way, the left side of the key is always ordered.

>To test it, I recommend inserting values greater than 10 in the array, because it will be clearer to understand the console output text, avoiding any confusion with the index numbers.

```
       Key
        ↓                       Key must be greater than previous element
[ 1 ] [ 3 ] [ 4 ] [ 2 ] [ 5 ]

 Prev  Key
  ↓     ↓                       
[ 1 ] [ 3 ] [ 4 ] [ 2 ] [ 5 ]   OK
       Prev  Key
        ↓     ↓            
[ 1 ] [ 3 ] [ 4 ] [ 2 ] [ 5 ]   OK
             Prev  Key
              ↓     ↓
[ 1 ] [ 3 ] [ 4 ] [ 2 ] [ 5 ]   Key is smaller


Stop checking the array to find key's place (stopped at index 3)

             Prev
              ↓
[ 1 ] [ 3 ] [ → ] [ 4 ] [ 5 ]   Previous jumped 1 index to the right
       Prev
        ↓
[ 1 ] [ 3 ] [   ] [ 4 ] [ 5 ]   Key is still smaller
       Prev
        ↓
[ 1 ] [ → ] [ 3 ] [ 4 ] [ 5 ]   Previous jumped 1 index to the right
 Prev
  ↓      
[ 1 ] [   ] [ 3 ] [ 4 ] [ 5 ]   Key is greater


[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]   Inserted

Continues to check the array (from index 4)

                   Prev  Key
                    ↓     ↓
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]   OK
```


## Merge Sort
This sorting algorithm will recursively divide the array in half until there is only one element left, then it will compare the values to start merging them back in the right order.
```
            [ 20 ] [ 15 ] | [ 10 ] [ 25 ]                        LVL 0
                  ↓               ↓                   (divide)
      [ 20 ] | [ 15 ]            [ 10 ] | [ 25 ]                 LVL 1
      ↓             ↓            ↓             ↓      (divide)
 [ 20 ]           [ 15 ]     [ 10 ]           [ 25 ]             LVL 2
 ---------------------------------------------------
 [ 20 ]     ↔     [ 15 ]     [ 10 ]     ↔     [ 25 ]  (compare)  LVL 2
            ↓                           ↓             (merge)
      [ 15 ]   [ 20 ]     ↔        [ 10 ]   [ 25 ]    (compare)  LVL 1
                          ↓                           (merge)
            [ 10 ] [ 15 ] [ 20 ] [ 25 ]                          LVL 0
```
## Bubble Sort
This sorting algorithm runs linearly, comparing adjacent elements and swapping them if necessary to order it. It will run from beginning to end until there's nothing to swap anymore.

```
[ 4 ] [ 2 ] [ 1 ] [ 3 ] [ 5 ]

           Round 1
[ 4 ]↔[ 2 ] [ 1 ] [ 3 ] [ 5 ] 4 > 2
[ 2 ] [ 4 ] [ 1 ] [ 3 ] [ 5 ] swapped

[ 2 ] [ 4 ]↔[ 1 ] [ 3 ] [ 5 ] 4 > 1
[ 2 ] [ 1 ] [ 4 ] [ 3 ] [ 5 ] swapped

[ 2 ] [ 1 ] [ 4 ]↔[ 3 ] [ 5 ] 4 > 3
[ 2 ] [ 1 ] [ 3 ] [ 4 ] [ 5 ] swapped

[ 2 ] [ 1 ] [ 3 ] [ 4 ]↔[ 5 ] 4 < 5
[ 2 ] [ 1 ] [ 3 ] [ 4 ] [ 5 ]

           Round 2
[ 2 ]↔[ 1 ] [ 3 ] [ 4 ] [ 5 ] 2 > 1
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] swapped

[ 1 ] [ 2 ]↔[ 3 ] [ 4 ] [ 5 ] 2 < 3
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

[ 1 ] [ 2 ] [ 3 ]↔[ 4 ] [ 5 ] 3 < 4
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

[ 1 ] [ 2 ] [ 3 ] [ 4 ]↔[ 5 ] 4 < 5
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

           Round 3
[ 1 ]↔[ 2 ] [ 3 ] [ 4 ] [ 5 ] 1 < 2
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

[ 1 ] [ 2 ]↔[ 3 ] [ 4 ] [ 5 ] 2 < 3
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

[ 1 ] [ 2 ] [ 3 ]↔[ 4 ] [ 5 ] 3 < 4
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

[ 1 ] [ 2 ] [ 3 ] [ 4 ]↔[ 5 ] 4 < 5
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
```


## Quick Sort
This algorithm chooses a pivot number, usually the first, the last or the middle element of the array (in this program, we'll be using the last). The pivot element will be compared to every other element, moving values smaller than it to its left and moving values greater than it to its right. That way, even though the elements on both sides are not ordered yet, the pivot element is already in the correct final index.

Then, the array will be divided into two other arrays - the left of the pivot and the right of the pivot -, and the same thing will be done recursively until there's only one element. At the end, every element will be at the correct index.


```
[ 2 ] [ 6 ] [ 5 ] [ 1 ] [ 3 ] [ 7 ] [ 4 ]    

last element = pivot = 4

[ 2 ] < pivot, goes to the left
[ 6 ] > pivot, goes to the right
[ 5 ] > pivot, goes to the right
[ 1 ] < pivot, goes to the left
[ 3 ] < pivot, goes to the left
[ 7 ] > pivot, goes to the right


      Left               Pivot            Right
[ 2 ] [ 1 ] [ 3 ]      | [ 4 ] |    [ 6 ] [ 5 ] [ 7 ]

last element = pivot (3)            last element = pivot (7)

[ 2 ] < pivot, goes left            [ 6 ] < pivot, goes left
[ 1 ] < pivot, goes left            [ 5 ] < pivot, goes left

Left              Pivot             Left              Pivot
[ 2 ] [ 1 ]   |   [ 3 ]             [ 6 ] [ 5 ]   |   [ 7 ]

last element = pivot (1)            last element = pivot (5)
[ 2 ] > pivot, goes right           [ 6 ] > pivot, goes right

Pivot     Right                     Pivot    Right
[ 1 ]    [ 2 ]                      [ 5 ]    [ 6 ]

  ↑        ↑        ↑        ↑        ↑        ↑
[ 1 ]    [ 2 ]    [ 3 ]    [ 4 ]    [ 5 ]    [ 6 ]

```
>Note: There are other ways of implementing a Quick Sort algorithm. This programmed used the Lomuto way.


----
### How to run this program

#### 1. Make sure you have Node.js installed

I built this program using the _v22.19.0_ version, so, if for any reason your machine fails to run this program even with Node.js is already installed, I recommend trying to install the specificied version.

#### 2. Clone or download this repository

You can do it by clicking the `<> Clone` button right above the list of files in this repository.

#### 3. Run the main file using Node.js

In terminal, once  you're inside the folder where the `main` file is, run it using Node:

```
node main.js
```


---
##### Suggestions are very welcome and can be sent through the Issues option, under the repository name. Feel free to contact me anytime via [LinkedIn](https://linkedin.com/in/vanessadquadros).